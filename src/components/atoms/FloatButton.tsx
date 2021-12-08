import React from "react";
import { FabParams } from "../../types";
import Colors from "../../styles/Colors";
import { StyleSheet } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";

export const FloatButton: React.FC<FabParams> = ({ open, onStateChange, actions }) => {
  return (
    <FAB.Group
      visible
      open={open}
      actions={actions}
      color={Colors.white}
      fabStyle={styles.fab}
      icon={open ? "close" : "plus"}
      theme={{ colors: { backdrop: "transparent" } }}
      onStateChange={(state) => onStateChange(state.open)}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    marginRight: 24,
    marginBottom: 24,
    backgroundColor: Colors.primary,
  },
});
