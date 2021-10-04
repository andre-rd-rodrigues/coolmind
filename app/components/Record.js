import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import colors from "../config/colors";

const Record = ({ record, onPressRemove, onPressEdit }) => {
  const iconSize = 25;
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <MaterialCommunityIcons
          name="clipboard-account-outline"
          color={colors.grey}
          size={iconSize}
        />
        <Text style={styles.text}>{record.date}</Text>
      </View>
      <View style={styles.flex}>
        <TouchableWithoutFeedback onPress={() => onPressEdit(record.id)}>
          <MaterialCommunityIcons
            name="lead-pencil"
            color={colors.blue}
            size={iconSize}
            style={styles.icons}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onPressRemove(record.id)}>
          <MaterialCommunityIcons
            name="close-circle"
            color={colors.blue}
            size={iconSize}
            style={styles.icons}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Record;

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 6,
    backgroundColor: colors.white,
    padding: 10
  },
  text: {
    color: colors.grey,
    marginHorizontal: 7,
    fontSize: 17,
    fontWeight: "500"
  },
  icons: {
    marginHorizontal: 8
  },
  flex: {
    display: "flex",
    flexDirection: "row"
  }
});
