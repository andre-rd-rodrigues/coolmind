import React from "react";
import { Image, StyleSheet } from "react-native";
import Input from "../components/TextInput";
import ImageBackgroundScreen from "../components/ImageBackgroundScreen";
import Button from "../components/Button";

const LoginScreen = () => {
  return (
    <ImageBackgroundScreen
      uri={require("../assets/sections_bg.png")}
      style={styles.container}
    >
      <Image style={styles.logo} source={require("../assets/logo_head.png")} />
      <Input icon="account" placeholder="Email" />
      <Input icon="lock" placeholder="Password" />

      <Button title="Login" color="secondary" />
    </ImageBackgroundScreen>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginTop: 30
  },
  logo: {
    width: 105,
    height: 105,
    overflow: "visible",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  }
});
export default LoginScreen;
