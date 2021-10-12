import React from "react";
import { TextInput, StyleSheet, Keyboard } from "react-native";
import defaultStyles from "../config/styles";

function AppTextArea({ ...otherProps }) {
  return (
    <TextInput
      placeholderTextColor={defaultStyles.colors.medium}
      onSubmitEditing={Keyboard.dismiss}
      style={styles.input}
      textAlignVertical="top"
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: defaultStyles.colors.white,
    borderColor: "transparent",
    borderRadius: 10,
    height: 200,
    borderWidth: 1,
    padding: 10,
    ...defaultStyles.text
  }
});

export default AppTextArea;
