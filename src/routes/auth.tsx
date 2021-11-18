import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import NotFoundScreen from "../screens/NotFoundScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import { HeaderClose, ScreenConfig } from "../components/atoms";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ScreenConfig(route.name, navigation)}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="AuthSettings"
        component={SettingsScreen}
        options={({ navigation }) => HeaderClose(navigation)}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
