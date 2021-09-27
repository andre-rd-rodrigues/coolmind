import React from "react";
import { Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import Text from "../components/Text";
import Screen from "../components/Screen";
import Container from "../components/Container";
import defaultStyles from "../config/styles";
import Card from "../components/ExerciseCard";

const HappinessScreen = () => {
  return (
    <Screen style={styles.container}>
      <Container scrollView>
        <Image source={require("../assets/sun.png")} style={styles.image} />
        <Title style={styles.title}>Happiness</Title>
        <Text style={styles.subtitle}>
          “Happinness is not something ready made, it comes from your own
          actions.” - Dalai Lama
        </Text>
        <Card
          title="Breather"
          time="10"
          body="A 5 min intro to meditation, relax and inhale to start."
          img={require("../assets/flower.png")}
        />
      </Container>
    </Screen>
  );
};

export default HappinessScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.beige
  },
  title: {
    marginTop: 20
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 25,
    fontStyle: "italic"
  },
  image: {
    width: 130,
    height: 113,
    alignSelf: "center",
    marginTop: 20
  }
});
