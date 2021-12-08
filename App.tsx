import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";
import { PaperTheme } from "./src/styles/Theme";
import { CommonProvider } from "./src/contexts";
import { useAsyncRes, useColorScheme } from "./src/hooks";

export default function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useAsyncRes();

  if (!isLoadingComplete) return null;
  else
    return (
      <SafeAreaProvider>
        <PaperProvider theme={PaperTheme}>
          <CommonProvider>
            <StatusBar translucent />
            <Routes colorScheme={colorScheme} />
          </CommonProvider>
        </PaperProvider>
      </SafeAreaProvider>
    );
}
