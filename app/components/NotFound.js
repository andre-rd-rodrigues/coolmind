import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import Text from "../components/Text";

const NotFound = ({ text }) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{text}</Text>
      <Image
        source={require("../assets/notFound.png")}
        resizeMode="cover"
        style={styles.emptyImage}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  emptyContainer: {
    marginTop: 50
  },
  emptyText: {
    fontWeight: "600",
    textAlign: "center",
    color: colors.grey,
    marginBottom: 40
  },
  emptyImage: {
    alignSelf: "center",
    width: 300,
    height: 200
  }
});
export default NotFound;
