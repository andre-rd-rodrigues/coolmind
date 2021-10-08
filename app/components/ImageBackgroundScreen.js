import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

const ImageBackgroundScreen = ({ uri, children, style, color = "white" }) => {
  return (
    <ImageBackground source={uri} resizeMode="stretch" style={styles.image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1
  }
});
export default ImageBackgroundScreen;
