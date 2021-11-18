import React, { ReactElement } from "react";
import { Avatar } from "react-native-paper";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleProp, ViewStyle } from "react-native";

import { Text, View } from "../Themed";
import Colors from "../../styles/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { useAuth } from "../../contexts";

interface NavigationParamList {
  headerTitle: string;
  headerTransparent: boolean;
  headerShadowVisible: boolean;
  tabBarActiveTintColor?: string;
  tabBarStyle?: StyleProp<ViewStyle>;
  headerRight: () => ReactElement<any, any>;
}

export function ScreenConfig(route: string, navigation: any, tabs?: boolean) {
  let colorScheme = "light";
  if (tabs) colorScheme = useColorScheme();

  const defaultImage =
    "https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg";

  const configs: NavigationParamList = {
    headerTitle: "",
    headerTransparent: true,
    headerShadowVisible: false,
    headerRight: () => (
      <View row>
        {tabs && (
          <Pressable
            onPress={() => console.log("Profile Screen")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              backgroundColor: "transparent",
            })}
          >
            <Avatar.Image
              size={32}
              source={{ uri: defaultImage }}
              style={{ backgroundColor: Colors.medium_gray, marginRight: 8 }}
            />
          </Pressable>
        )}
        <Pressable
          onPress={() => navigation.navigate(tabs ? "Settings" : "AuthSettings")}
          style={({ pressed }) => ({
            marginRight: tabs ? 16 : 0,
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <MaterialIcons size={32} name="settings" color={Colors.primary} />
        </Pressable>
      </View>
    ),
  };

  if (tabs) {
    configs["tabBarStyle"] = { paddingBottom: 4 };
    configs["tabBarActiveTintColor"] = Colors["light"].tint;
  }

  return configs;
}

export function HeaderClose(navigation: any) {
  return {
    title: "",
    headerShown: true,
    headerTransparent: true,
    headerShadowVisible: false,
    headerRight: () => undefined,
    headerLeft: () => (
      <Pressable
        onPress={() => navigation.pop()}
        style={({ pressed }) => ({
          marginLeft: 6,
          paddingHorizontal: 6,
          opacity: pressed ? 0.5 : 1,
          backgroundColor: "transparent",
        })}
      >
        <FontAwesome5 name="times-circle" size={28} color={Colors.primary} />
      </Pressable>
    ),
  };
}

export function LeftHeader(navigation: any) {
  const defaultImage =
    "https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg";

  return () => (
    <Pressable
      onPress={() => console.log("Select User Screen")}
      style={({ pressed }) => ({
        marginLeft: 16,
        opacity: pressed ? 0.5 : 1,
        backgroundColor: "transparent",
      })}
    >
      <View row>
        <Avatar.Image
          size={32}
          source={{ uri: defaultImage }}
          style={{ backgroundColor: Colors.medium_gray }}
        />
        <Text style={{ marginLeft: 8 }}>Roberto</Text>
      </View>
    </Pressable>
  );
}
