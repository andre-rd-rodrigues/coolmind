import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const TopicCard = ({ onPress, bg }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={bg} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    margin: 10,
    maxWidth: 160,
    maxHeight: 200,
    overflow: "hidden",
    borderRadius: 15
  },
  image: {
    width: 160,
    height: 210,
    resizeMode: "contain"
  }
});
export default TopicCard;
