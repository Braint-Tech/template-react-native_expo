import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

import Colors from "../../styles/Colors";
import { useAuth, useCommon } from "../../contexts";
import { Screen, TextInput } from "../../components/atoms";

export default function SignUpScreen() {
  const { loading } = useCommon();
  const { authSignUp } = useAuth();
  const navigation = useNavigation();

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    name: Yup.string().max(150, "150 characters maximum").required("Required"),
    password: Yup.string().min(8, "At least 8 characters").required("Required"),
  });

  return (
    <Screen scroll>
      <Card style={{ width: "100%" }}>
        <Card.Content>
          <Formik
            validateOnMount
            validationSchema={SignUpSchema}
            onSubmit={(values) => authSignUp(values)}
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
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
                  label={"Name"}
                  value={values["name"]}
                  iconName="account-outline"
                  onBlur={handleBlur("name")}
                  onChangeText={handleChange("name")}
                  formError={[touched["name"], errors["name"]]}
                />
                <TextInput
                  label="E-mail"
                  value={values["email"]}
                  iconName="email-outline"
                  keyboardType="email-address"
                  onBlur={handleBlur("email")}
                  onChangeText={handleChange("email")}
                  formError={[touched["email"], errors["email"]]}
                />
                <TextInput
                  secureTextEntry
                  label="Password"
                  iconName="lock-outline"
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
                  labelStyle={[
                    styles.buttonLabel,
                    { color: loading || !isValid ? Colors.darkGray : Colors.white },
                  ]}
                >
                  Create Account
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
            onPress={() => navigation.goBack()}
          >
            Back
          </Button>
        </Card.Content>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "bold",
  },

  button: {
    height: 54,
    marginTop: 16,
    justifyContent: "center",
  },

  buttonLabel: {
    height: 36,
    textAlignVertical: "center",
  },
});
