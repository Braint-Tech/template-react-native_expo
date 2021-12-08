import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Colors from "../../styles/Colors";
import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { useAuth, useCommon } from "../../contexts";
import { useNavigation } from "@react-navigation/core";
import { Screen, TextInput } from "../../components/atoms";

type formValues = "username" | "password";

const SigninSchema = Yup.object().shape({
  username: Yup.string().email("Email inválido").required("Obrigatório"),
  password: Yup.string().min(8, "Mínimo 8 caracteres").required("Obrigatório"),
});

export default function SignInScreen() {
  const { loading } = useCommon();
  const { authSignIn } = useAuth();
  const navigation = useNavigation();

  return (
    <Screen>
      <Card style={{ width: "100%" }}>
        <Card.Content>
          <Formik
            validateOnMount
            validationSchema={SigninSchema}
            onSubmit={(values) => authSignIn(values)}
            initialValues={{ username: "", password: "" }}
          >
            {({
              values,
              errors,
              isValid,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => {
              const controllers: formValues[] = ["username", "password"];
              return (
                <>
                  <TextInput
                    placeholder="E-mail"
                    iconName="account-outline"
                    keyboardType="email-address"
                    value={values[controllers[0]]}
                    onBlur={handleBlur(controllers[0])}
                    activeUnderlineColor={Colors.primary}
                    onChangeText={handleChange(controllers[0])}
                    formError={[touched[controllers[0]], errors[controllers[0]]]}
                  />
                  <TextInput
                    secureTextEntry
                    placeholder="Senha"
                    iconName="lock-outline"
                    value={values[controllers[1]]}
                    onBlur={handleBlur(controllers[1])}
                    activeUnderlineColor={Colors.primary}
                    onChangeText={handleChange(controllers[1])}
                    formError={[touched[controllers[1]], errors[controllers[1]]]}
                  />

                  <Button
                    mode="contained"
                    loading={loading}
                    style={styles.button}
                    onPress={handleSubmit}
                    color={Colors.primary}
                    disabled={loading || !isValid}
                    labelStyle={styles.buttonLabel}
                  >
                    ENTRAR
                  </Button>
                </>
              );
            }}
          </Formik>

          <Button
            mode="contained"
            disabled={loading}
            labelStyle={styles.buttonLabel}
            onPress={() => navigation.navigate("SignUp")}
            style={[styles.button, { backgroundColor: Colors.alternative }]}
          >
            CRIAR CONTA
          </Button>
        </Card.Content>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
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
