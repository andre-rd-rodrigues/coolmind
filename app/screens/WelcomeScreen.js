import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Constants from "expo-constants";
import Swiper from "react-native-swiper";
import Title from "../components/Title";
import Text from "../components/Text";
import Button from "../components/Button";
import defaultStyles from "../config/styles";
import storage from "../storage/storage";

const WelcomeScreen = ({ startClicked }) => {
  const startApp = async () => {
    await storage.storeData(false, "walkthrough");
    return startClicked(false);
  };

  return (
    <Swiper style={styles.wrapper} activeDotColor="white" dotColor="#C8E0DF">
      <View style={styles.slide}>
        <Title style={styles.title}>Welcome</Title>
        <Text style={styles.text}>
          Welcome to Coolmind! My name is André, I'm the founder of Coolmind,
          and I'll guide you through this peaceful journey. Let's get started!
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/welcome/welcome.png")}
            style={[styles.image, { width: 300, height: 250 }]}
          />
        </View>
      </View>
      <View style={styles.slide}>
        <Title style={styles.title}>Journey</Title>
        <Text style={styles.text}>
          Congratulations on taking this important step towards a conscious,
          calmer, and happier life. Coolmind is meant to help you along the way!
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/welcome/journey.png")}
            style={[styles.image, { width: 300, height: 300 }]}
          />
        </View>
      </View>
      <View style={styles.slide}>
        <Title style={styles.title}>All in one</Title>
        <Text style={styles.text}>
          Coolmind is all about getting some mind space. That's why we've
          summarized and organized scientifically proven exercises from Positive
          Psychology by topics, to help you cope anywhere and any time!
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/welcome/all.png")}
            style={[styles.image, { width: 300, height: 200 }]}
          />
        </View>
      </View>
      <View style={styles.slide}>
        <Title style={styles.title}>Secure</Title>
        <Text style={styles.text}>
          We take privacy very seriously. Therefore, no one has access to your
          information besides you.
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/welcome/secure.png")}
            style={[styles.image, { width: 300, height: 250 }]}
          />
        </View>
      </View>
      <View style={styles.slide}>
        <Title style={styles.title}>Manage</Title>
        <Text style={styles.text}>
          Choose a topic, then an exercise, and simply follow the instructions.
          When finished, submit. Quick and easy! Organize your favorite
          exercises and repeat them whenever you like!
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/welcome/manage.png")}
            style={[styles.image, { width: 300, height: 250 }]}
          />
        </View>
      </View>
      <View style={styles.slide}>
        <Title style={styles.title}>Enjoy</Title>
        <Text style={styles.text}>
          Our goal is to improve the health and happiness of the world. We hope
          that Coolmind you’ll help you create the foundation you need to build
          a more peaceful, joyful, and stress-free life.
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/welcome/enjoy.png")}
            style={[styles.image, { width: 300, height: 200 }]}
          />
        </View>
        <Button
          title="START"
          style={styles.button}
          color="red"
          onPress={startApp}
        />
      </View>
    </Swiper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 40,
    alignItems: "center",
    backgroundColor: "#ACD1CF",
    paddingHorizontal: 15
  },
  title: {
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 6
  },
  text: {
    color: "white",
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 30
  },
  image: {
    resizeMode: "contain",
    marginVertical: 10
  },
  button: {
    ...defaultStyles.text,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 4
  }
});
