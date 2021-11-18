import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";
import useColorScheme from "./src/hooks/useColorScheme";
import { AuthProvider, CommonProvider } from "./src/contexts";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CommonProvider>
          <AuthProvider>
            <StatusBar />
            <Routes colorScheme={colorScheme} />
          </AuthProvider>
        </CommonProvider>
      </SafeAreaProvider>
    );
  }
}
