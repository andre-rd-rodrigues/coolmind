import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import defStyles from "../config/styles";
import useStorage from "../hooks/useStorage";
import Time from "./ExerciseTime";
import LikeButton from "./LikeButton";
import Text from "./Text";

const ExerciseCard = ({ onPress, removeLike, exercise, topicName }) => {
  const { title, body } = exercise.brief;
  const { id, time, pratice, favorite, uri } = exercise;

  const { toggleFavorite } = useStorage(topicName, id, pratice);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View>
          <View style={styles.timeRow}>
            <Time time={time} />
            <LikeButton
              onPress={() => {
                toggleFavorite();
                removeLike && removeLike(id);
              }}
              value={favorite ? 1 : 0}
            />
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15
  },
  timeRow: {
    display: "flex",
    flexDirection: "row"
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
  image: {
    position: "absolute",
    width: 100,
    height: 120,
    right: 0,
    bottom: 0
  }
});
