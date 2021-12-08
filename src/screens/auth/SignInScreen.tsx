import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

import Colors from "../../styles/Colors";
import { useAuth, useCommon } from "../../contexts";
import { Screen, TextInput } from "../../components/atoms";

export default function SignInScreen() {
  const { loading } = useCommon();
  const { authSignIn } = useAuth();
  const navigation = useNavigation();

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "At least 8 characters").required("Required"),
  });

  return (
    <Screen>
      <Card style={{ width: "100%" }}>
        <Card.Content>
          <Formik
            validateOnMount
            validationSchema={SigninSchema}
            onSubmit={(values) => authSignIn(values)}
            initialValues={{ email: "", password: "" }}
          >
            {({
              values,
              errors,
              isValid,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <>
                <TextInput
                  label="E-mail"
                  value={values["email"]}
                  keyboardType="email-address"
                  onBlur={handleBlur("email")}
                  onChangeText={handleChange("email")}
                  formError={[touched["email"], errors["email"]]}
                />
                <TextInput
                  secureTextEntry
                  label={"Password"}
                  value={values["password"]}
                  onBlur={handleBlur("password")}
                  onChangeText={handleChange("password")}
                  formError={[touched["password"], errors["password"]]}
                />

                <Button
                  mode="contained"
                  loading={loading}
                  style={styles.button}
                  onPress={handleSubmit}
                  color={Colors.alternative}
                  disabled={loading || !isValid}
                  labelStyle={[styles.buttonLabel, { color: Colors.white }]}
                >
                  Login
                </Button>
              </>
            )}
          </Formik>
          <Button
            mode="contained"
            disabled={loading}
            style={styles.button}
            color={Colors.secondary}
            labelStyle={[styles.buttonLabel]}
            onPress={() => navigation.navigate("SignUp")}
          >
            Create Account
          </Button>
        </Card.Content>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    justifyContent: "center",
  },

  buttonLabel: {
    height: 36,
    textAlignVertical: "center",
  },
});
