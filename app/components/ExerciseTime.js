import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";

const ExerciseTime = ({ time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time} MIN</Text>
    </View>
  );
};

export default ExerciseTime;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 25,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E2F1FF",
    paddingHorizontal: 15,
    borderRadius: 5
  },
  time: {
    color: "#6391CE",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1
  }
});
