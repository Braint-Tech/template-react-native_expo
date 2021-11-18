import { StyleProp, ViewStyle } from "react-native";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";

export interface ScreenParams {
  url?: string;
  title: string;
  logo?: boolean;
  scroll?: boolean;
  icon?: IconSource;
}

export interface TextInputParams extends Omit<TextInputProps, "theme"> {
  iconName?: string;
  formError: Array<any>;
  theme?: ReactNativePaper.Theme;
}

// export type TextInputParams = InputParams & TextInputProps;

interface FabActionsParams {
  icon: string;
  label: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
}

export interface FabParams {
  open: boolean;
  actions: Array<FabActionsParams>;
  onStateChange: (state: boolean) => void;
}
