import React from "react";
import { ColorSchemeName } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";

import AuthNavigator from "./auth";
import { useAuth } from "../contexts";
import { HomeNavigator } from "./home";
import LinkingConfiguration from "./LinkingConfig";

export default function Routes({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { signed } = useAuth();

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {signed ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
