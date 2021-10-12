import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const AppActivityIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default AppActivityIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
