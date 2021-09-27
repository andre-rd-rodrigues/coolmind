import React from "react";
import { Text, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";

function Title({ children, style, textAlign = "center", ...otherProps }) {
  return (
    <Text style={[styles.title, style, { textAlign }]} {...otherProps}>
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({
  title: {
    ...defaultStyles.text,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  }
});
export default Title;
