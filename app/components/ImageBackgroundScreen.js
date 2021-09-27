import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";

const ImageBackgroundScreen = ({ uri, children, style, color = "white" }) => {
  return (
    <Screen style={[{ backgroundColor: colors[color] }, style]}>
      <ImageBackground source={uri} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1
  }
});
export default ImageBackgroundScreen;
