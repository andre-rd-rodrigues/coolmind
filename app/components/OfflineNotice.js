import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import colors from "../config/colors";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unkown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No internet connection</Text>
      </View>
    );
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    height: 30,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  }
});
