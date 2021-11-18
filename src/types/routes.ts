import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Modal: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Settings: undefined;
  NotFound: undefined;
  AuthSettings: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  News: undefined;
  Calendar: undefined;
  Medicines: undefined;
  Careceivers: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
