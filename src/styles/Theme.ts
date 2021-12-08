import { DefaultTheme } from "react-native-paper";

import Colors from "./Colors";
import { fontLight, fontRegular, fontSemibold } from "./Typography";

export const PaperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.white,
    accent: Colors.alternative,
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: fontRegular,
    medium: fontSemibold,
    light: fontLight,
  },
};
