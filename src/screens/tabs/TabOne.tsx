import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Colors from "../../styles/Colors";
import { Text } from "../../components/Themed";
import { Screen } from "../../components/atoms";
import { RootTabScreenProps } from "../../types";
import { fontBold, size18 } from "../../styles/Typography";
import { FloatButton } from "../../components/atoms/FloatButton";

export default function TabOne({ navigation }: RootTabScreenProps<"TabOne">) {
  const [FABopen, setFABopen] = useState(false);

  return (
    <Screen fab center>
      <Text style={styles.title}>TAB 1</Text>
      <FloatButton
        open={FABopen}
        onStateChange={(state: boolean) => setFABopen(state)}
        actions={[
          {
            color: Colors.white,
            icon: "open-in-new",
            label: "Open Modal",
            onPress: () => navigation.navigate("Modal"),
            style: { backgroundColor: Colors.alternative },
          },
        ]}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { ...fontBold, fontSize: size18 },
});
