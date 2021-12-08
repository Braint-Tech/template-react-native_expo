import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

import Colors from "../../styles/Colors";
import { SignUpParams } from "../../types";
import { useAuth, useCommon } from "../../contexts";
import { Screen, TextInput } from "../../components/atoms";

type formValues = "first_name" | "last_name" | "email" | "password" | "passwordCheck";

const SigninSchema = Yup.object().shape({
  first_name: Yup.string().max(30, "Máximo 30 caracteres").required("Obrigatório"),
  last_name: Yup.string().max(150, "Máximo 150 caracteres").required("Obrigatório"),
  email: Yup.string().email("Email inválido").required("Obrigatório"),
  password: Yup.string().min(8, "Mínimo 8 caracteres").required("Obrigatório"),
  passwordCheck: Yup.string()
    .min(8, "Mínimo 8 caracteres")
    .oneOf([Yup.ref("password"), null], "Senhas diferentes")
    .required("Obrigatório"),
});

export default function SignUpScreen() {
  const { loading } = useCommon();
  const { authSignUp } = useAuth();
  const navigation = useNavigation();

  return (
    <Screen scroll title="Criar" logo>
      <Card style={{ width: "100%" }}>
        <Card.Content>
          <Formik
            validateOnMount
            validationSchema={SigninSchema}
            onSubmit={(values) => {
              const finalValues: SignUpParams = { ...values };
              delete finalValues.passwordCheck;
              authSignUp(finalValues);
            }}
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              passwordCheck: "",
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
            }) => {
              const controllers: formValues[] = [
                "first_name",
                "last_name",
                "email",
                "password",
                "passwordCheck",
              ];
              return (
                <>
                  <TextInput
                    iconName="account-outline"
                    placeholder="Primeiro Nome"
                    value={values[controllers[0]]}
                    onBlur={handleBlur(controllers[0])}
                    activeUnderlineColor={Colors.primary}
                    onChangeText={handleChange(controllers[0])}
                    formError={[touched[controllers[0]], errors[controllers[0]]]}
                  />
                  <TextInput
                    placeholder="Último Nome"
                    iconName="account-outline"
                    value={values[controllers[1]]}
                    onBlur={handleBlur(controllers[1])}
                    activeUnderlineColor={Colors.primary}
                    onChangeText={handleChange(controllers[1])}
                    formError={[touched[controllers[1]], errors[controllers[1]]]}
                  />
                  <TextInput
                    placeholder="E-mail"
                    iconName="email-outline"
                    keyboardType="email-address"
                    value={values[controllers[2]]}
                    onBlur={handleBlur(controllers[2])}
                    activeUnderlineColor={Colors.primary}
                    onChangeText={handleChange(controllers[2])}
                    formError={[touched[controllers[2]], errors[controllers[2]]]}
                  />
                  <TextInput
                    secureTextEntry
                    placeholder="Senha"
                    iconName="lock-outline"
                    value={values[controllers[3]]}
                    onBlur={handleBlur(controllers[3])}
                    activeUnderlineColor={Colors.primary}
                    onChangeText={handleChange(controllers[3])}
                    formError={[touched[controllers[3]], errors[controllers[3]]]}
                  />
                  <TextInput
                    secureTextEntry
                    iconName="lock-outline"
                    placeholder="Confirmar Senha"
                    value={values[controllers[4]]}
                    onBlur={handleBlur(controllers[4])}
                    activeUnderlineColor={Colors.primary}
                    onChangeText={handleChange(controllers[4])}
                    formError={[touched[controllers[4]], errors[controllers[4]]]}
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
                    CRIAR CONTA
                  </Button>
                </>
              );
            }}
          </Formik>

          <Button
            mode="contained"
            disabled={loading}
            labelStyle={styles.buttonLabel}
            onPress={() => navigation.navigate("SignIn")}
            style={[styles.button, { backgroundColor: Colors.primary }]}
          >
            VOLTAR
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
