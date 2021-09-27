import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

const AppImageBackground = ({
  uri,
  blur = 0,
  backgroundColor = "rgba(0,0,0,0)",
  children
}) => {
  return (
    <ImageBackground
      source={{
        uri
      }}
      resizeMode="cover"
      style={styles.image}
      blurRadius={blur}
    >
      <View style={[styles.layer, { backgroundColor }]}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  layer: {
    flex: 1,
    padding: 10
  }
});
export default AppImageBackground;
