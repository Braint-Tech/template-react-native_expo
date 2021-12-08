import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../styles/Colors";
import { Text } from "../components/Themed";
import { Screen } from "../components/atoms";
import { RootTabScreenProps } from "../types";
import { fontBold, fontRegular, size18 } from "../styles/Typography";

export default function ModalScreen({ navigation }: RootTabScreenProps<"TabThree">) {
  return (
    <Screen center>
      <Text style={styles.title}>MODAL</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navigation}>GO BACK</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { ...fontBold, fontSize: size18 },
  navigation: {
    ...fontRegular,
    marginTop: 8,
    color: Colors.primary,
  },
});
