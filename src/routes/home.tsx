import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabOne from "../screens/tabs/TabOne";
import TabTwo from "../screens/tabs/TabTwo";
import TabThree from "../screens/tabs/TabThree";
import ModalScreen from "../screens/ModalScreen";
import { RootStackParamList, RootTabParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />

      <Stack.Group screenOptions={{ presentation: "modal", headerShown: true }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="TabOne">
      <BottomTab.Screen
        name="TabOne"
        component={TabOne}
        options={{
          title: "First Tab",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="TabTwo"
        component={TabTwo}
        options={{
          title: "Second Tab",
          tabBarIcon: ({ color }) => <TabBarIcon name="globe" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="TabThree"
        component={TabThree}
        options={{
          title: "Third Tab",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-alt" color={color} iconSize={16} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  color: string;
  iconSize?: number;
  name: React.ComponentProps<typeof FontAwesome5>["name"];
}) {
  return (
    <FontAwesome5 size={props.iconSize || 20} style={{ marginBottom: -8 }} {...props} />
  );
}
