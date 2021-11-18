import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HeaderClose, ScreenConfig } from "../components/atoms";
import { RootStackParamList, RootTabParamList } from "../types";

import Home from "../screens/tabs/Home";
import News from "../screens/tabs/News";
import Calendar from "../screens/tabs/Calendar";
import ModalScreen from "../screens/ModalScreen";
import { LeftHeader } from "../components/atoms";
import Medicines from "../screens/tabs/Medicines";
import Careceivers from "../screens/tabs/Careceivers";
import NotFoundScreen from "../screens/NotFoundScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => HeaderClose(navigation)}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) =>
        ScreenConfig(route.name, navigation, true)
      }
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Medicines"
        component={Medicines}
        options={({ navigation }) => ({
          title: "Medicação",
          headerLeft: LeftHeader(navigation),
          tabBarIcon: ({ color }) => <TabBarIcon name="pills" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Calendar"
        component={Calendar}
        options={({ navigation }) => ({
          title: "Agenda",
          headerLeft: LeftHeader(navigation),
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Careceivers"
        component={Careceivers}
        options={({ navigation }) => ({
          title: "Cuidadores",
          headerLeft: LeftHeader(navigation),
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="News"
        component={News}
        options={({ navigation }) => ({
          title: "Notícias",
          headerLeft: LeftHeader(navigation),
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
}) {
  return <FontAwesome5 size={20} style={{ marginBottom: -6 }} {...props} />;
}
