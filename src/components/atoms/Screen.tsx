import React from "react";
import { Avatar, Surface } from "react-native-paper";
import { ScrollView, StyleSheet } from "react-native";

import Colors from "../../styles/Colors";
import { ScreenParams } from "../../types";
import { size_24 } from "../../styles/Typography";
import { Text, useThemeColor, View } from "../Themed";

export const Screen: React.FC<ScreenParams> = ({
  url,
  logo,
  icon,
  title,
  scroll,
  children,
}) => {
  const backgroundColor = useThemeColor(
    { light: Colors.white, dark: Colors.dark.background },
    "background"
  );

  const iconColor = useThemeColor(
    { light: Colors.light.tint, dark: Colors.dark.tint },
    "background"
  );

  const imageSource = logo
    ? require("../../assets/images/logo-blue.png")
    : url
    ? { uri: url }
    : "";

  const content = (
    <>
      <Surface style={styles.surface}>
        {logo || url ? (
          <Avatar.Image
            size={78}
            source={imageSource}
            style={[{ backgroundColor: backgroundColor }]}
          />
        ) : icon ? (
          <Avatar.Icon
            size={78}
            icon={icon}
            color={iconColor}
            style={[{ backgroundColor: backgroundColor }]}
          />
        ) : (
          <Avatar.Icon
            size={78}
            icon="cog"
            color={iconColor}
            style={[{ backgroundColor: backgroundColor }]}
          />
        )}
      </Surface>
      <Text
        style={[styles.title, scroll ? { marginBottom: 16 } : {}]}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}
      >
        {title}
      </Text>
    </>
  );

  if (scroll)
    return (
      <ScrollView style={styles.scrollable}>
        <View container>{content}</View>
        <View style={styles.scrollPadding}>{children}</View>
      </ScrollView>
    );
  else
    return (
      <View container style={styles.main}>
        {content}
        {children}
      </View>
    );
};

const styles = StyleSheet.create({
  main: { paddingTop: 86 },
  scrollPadding: { paddingBottom: 128 },

  surface: {
    elevation: 3,
    marginBottom: 8,
    borderRadius: 40,
  },

  title: {
    marginBottom: 32,
    fontSize: size_24,
  },

  scrollable: {
    paddingTop: 70,
    display: "flex",
    paddingHorizontal: 36,
    backgroundColor: Colors.light.background,
  },
});
