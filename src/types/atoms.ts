import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Text as DefaultText, View as DefaultView } from "react-native";
import { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";

type ThemeProps = {
  row?: boolean;
  spaced?: boolean;
  center?: boolean;
  darkColor?: string;
  container?: boolean;
  lightColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export interface ScreenParams {
  fab?: boolean;
  center?: boolean;
  scroll?: boolean;
  children: ReactElement | ReactElement[];
}

export interface TextInputParams extends Omit<TextInputProps, "theme"> {
  iconName?: string;
  formError: Array<any>;
  theme?: ReactNativePaper.Theme;
}

interface FabActionsParams {
  icon: string;
  color: string;
  label: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
}

export interface FabParams {
  open: boolean;
  actions: Array<FabActionsParams>;
  onStateChange: (state: boolean) => void;
}

export interface ScaledImageParams {
  uri: any;
  scale: number;
  width: number;
  height: number;
}
