import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";

const TopicCard = ({ onPress, img, title, bgColor, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        <Image style={styles.image} source={img} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 14,
    overflow: "hidden",
    borderRadius: 15
  },
  text: {
    marginLeft: 30,
    fontSize: 18,
    fontWeight: "bold"
  },
  image: {
    width: 160,
    height: 210,
    resizeMode: "contain"
  }
});
export default TopicCard;
