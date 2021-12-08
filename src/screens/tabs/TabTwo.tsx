import React from "react";
import { StyleSheet } from "react-native";

import { Text } from "../../components/Themed";
import { Screen } from "../../components/atoms";
import { RootTabScreenProps } from "../../types";
import { fontBold, size18 } from "../../styles/Typography";

export default function TabTwo({ navigation }: RootTabScreenProps<"TabThree">) {
  return (
    <Screen center>
      <Text style={styles.title}>TAB 2</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { ...fontBold, fontSize: size18 },
});
