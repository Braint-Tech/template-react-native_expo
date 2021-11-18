import * as React from "react";
import { Text as DefaultText, View as DefaultView } from "react-native";

import Colors from "../styles/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  row?: boolean;
  center?: boolean;
  darkColor?: string;
  container?: boolean;
  lightColor?: string;
};

interface ContainerParams {
  flex: number;
  alignItems: string;
  justifyContent: string;
  paddingVertical: number;
  paddingHorizontal: number;
}

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, container, row, center, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const extra: ContainerParams | Object = container
    ? {
        flex: 1,
        paddingVertical: 16,
        alignItems: "center",
        paddingHorizontal: 36,
        justifyContent: center ? "center" : "flex-start",
      }
    : row
    ? {
        display: "flex",
        overflow: "hidden",
        whiteSpace: "noWrap",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
      }
    : {};

  return <DefaultView style={[{ backgroundColor }, extra, style]} {...otherProps} />;
}
