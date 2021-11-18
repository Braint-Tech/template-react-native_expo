import React from "react";
import { StyleSheet } from "react-native";
import { TextInput as Input, HelperText } from "react-native-paper";

import Colors from "../../styles/Colors";
import { TextInputParams } from "../../types";
import { size_14, size_18 } from "../../styles/Typography";

export const TextInput: React.FC<TextInputParams> = (props) => {
  const { iconName, formError, keyboardType, autoCapitalize, ...otherProps } = props;
  const showError = Boolean(formError[0] && formError[1]);

  return (
    <>
      <Input
        dense
        error={showError}
        style={styles.textInput}
        activeUnderlineColor={Colors.primary}
        keyboardType={keyboardType || "default"}
        autoCapitalize={autoCapitalize || "none"}
        left={iconName ? <Input.Icon name={iconName} size={32} /> : undefined}
        {...otherProps}
      />
      <HelperText
        type="error"
        visible={showError}
        onPressIn={() => {}}
        onPressOut={() => {}}
        style={styles.helperText}
      >
        {formError[1]}
      </HelperText>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 4,
    marginBottom: 4,
    paddingBottom: 4,
    fontSize: size_18,
    backgroundColor: "transparent",
  },

  helperText: {
    fontSize: size_14,
    paddingVertical: 0,
    alignSelf: "flex-end",
  },
});
