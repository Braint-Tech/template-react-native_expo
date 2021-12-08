import React, { ReactChildren, ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";

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
