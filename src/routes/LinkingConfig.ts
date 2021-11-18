/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";
import { LinkingOptions } from "@react-navigation/native";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "home",
            },
          },
          Medicines: {
            screens: {
              MedicinesScreen: "medicines",
            },
          },
          Calendar: {
            screens: {
              CalendarScreen: "calendar",
            },
          },
          Careceivers: {
            screens: {
              CareceiversScreen: "careceivers",
            },
          },
          News: {
            screens: {
              NewsScreen: "news",
            },
          },
        },
      },
      Settings: {
        screens: {
          SettingsScreen: "settings",
        },
      },
      SignIn: {
        screens: {
          SignInScreen: "signin",
        },
      },
      SignUp: {
        screens: {
          SignUpScreen: "signup",
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
