import React from "react";
import { Portal, Provider } from "react-native-paper";
import { ScrollView, StyleSheet } from "react-native";

import { View } from "../Themed";
import { ScreenParams } from "../../types";

export const Screen: React.FC<ScreenParams> = ({ fab, scroll, center, children }) => {
  const styles = StyleSheet.create({
    main: { paddingTop: center ? 0 : 32 },

    scrollPadding: { paddingBottom: 128 },

    scrollable: {
      display: "flex",
      paddingHorizontal: 36,
      backgroundColor: "#F8F8F8",
    },
  });

  const finalView = scroll ? (
    <ScrollView style={styles.scrollable}>
      <View style={styles.scrollPadding}>{children}</View>
    </ScrollView>
  ) : (
    <View container center={center} style={styles.main} lightColor="#F8F8F8">
      {children}
    </View>
  );

  if (fab)
    return (
      <Provider>
        <Portal>{finalView}</Portal>
      </Provider>
    );
  else return finalView;
};
