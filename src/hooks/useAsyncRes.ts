import * as Font from "expo-font";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import {
  Montserrat_700Bold,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

// Loads everything before hiding the default loading screen
export default function useAsyncRes() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          ...FontAwesome.font,
          "Montserrat-Bold": Montserrat_700Bold,
          "Montserrat-Light": Montserrat_300Light,
          "Montserrat-Regular": Montserrat_400Regular,
          "Montserrat-Semibold": Montserrat_600SemiBold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
