import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import defStyles from "../config/styles";
import Time from "./ExerciseTime";
import Text from "./Text";

const ExerciseCard = ({ time, title, body, img, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Time time={time} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
        <Image source={img} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15,
    overflow: "hidden"
  },
  title: {
    marginVertical: 13,
    color: defStyles.colors.primary,
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 17
  },
  body: {
    color: "grey"
  },
  content: {
    width: "80%"
  },
  image: {
    position: "absolute",
    width: 100,
    height: 120,
    right: 0,
    bottom: 0
  }
});
