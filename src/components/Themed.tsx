import React from "react";
import {
  StyleProp,
  ViewStyle,
  Text as DefaultText,
  View as DefaultView,
} from "react-native";

import Colors from "../styles/Colors";
import { useColorScheme } from "../hooks";
import { TextProps, ViewProps } from "../types";

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

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  let extraStyle: StyleProp<ViewStyle>;
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: props.lightColor, dark: props.darkColor },
    "background"
  );

  if (props.container)
    extraStyle = {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 32,
      justifyContent: props.center ? "center" : "flex-start",
    };
  else if (props.row)
    extraStyle = {
      overflow: "hidden",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: props.center
        ? "center"
        : props.spaced
        ? "space-between"
        : "flex-start",
    };

  return <DefaultView style={[{ backgroundColor }, extraStyle, style]} {...otherProps} />;
}
