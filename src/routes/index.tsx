import React from "react";
import { ColorSchemeName } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";

import { HomeNavigator } from "./home";
import LinkingConfiguration from "./LinkingConfig";

export default function Routes({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <HomeNavigator />
    </NavigationContainer>
  );
}
