import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import defStyles from "../config/styles";
import useStorage from "../hooks/useStorage";
import Time from "./ExerciseTime";
import LikeButton from "./LikeButton";
import Text from "./Text";

const ExerciseCard = ({ onPress, removeLike, exercise, topicName }) => {
  const { title, body, img } = exercise.brief;
  const { id, time, pratice, favorite } = exercise;

  const { toggleFavorite } = useStorage(topicName, id, pratice);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.content}>
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
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2021/01/28/16/06/leaves-5958383_960_720.png"
          }}
          style={styles.image}
        />
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