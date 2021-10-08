import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import Title from "../components/Title";
import Quote from "../components/Text";
import Screen from "../components/Screen";
import Container from "../components/Container";
import Card from "../components/ExerciseCard";

const TopicDetailsScreen = ({ route, navigation }) => {
  const [key, setKey] = useState(0);
  const { name, quote, exercises, topicDetailsImage } = route.params;

  useEffect(() => {
    navigation.addListener("focus", () => setKey((prevKey) => prevKey + 1));
  }, []);

  const Topic = () => {
    switch (name) {
      case "Relax":
        return (
          <>
            <View style={styles.imageRelaxContainer}>
              <Image source={topicDetailsImage} style={styles.imageRelax} />
            </View>
            <Container scrollView>
              <Title style={styles.title}>{name}</Title>
              <Quote style={styles.subtitle}>{quote}</Quote>
              {exercises.map((exercise) => (
                <Card
                  key={exercise.id}
                  img={exercise.uri}
                  topicName={exercise.brief.title}
                  exercise={exercise}
                  onPress={() =>
                    navigation.navigate("ExerciseDetails", { exercise, name })
                  }
                />
              ))}
            </Container>
          </>
        );

      default:
        return (
          <>
            <Container scrollView>
              <View style={styles.imageContainer}>
                <Image source={topicDetailsImage} style={styles.image} />
              </View>
              <Title style={styles.title}>{name}</Title>
              <Quote style={styles.subtitle}>{quote}</Quote>
              {exercises.map((exercise) => (
                <Card
                  key={exercise.id}
                  exercise={exercise}
                  topicName={name}
                  onPress={() =>
                    navigation.navigate("ExerciseDetails", { exercise, name })
                  }
                />
              ))}
            </Container>
          </>
        );
    }
  };
  return (
    <Screen>
      <Topic />
    </Screen>
  );
};

export default TopicDetailsScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 0
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 25,
    fontStyle: "italic"
  },
  imageRelaxContainer: {
    height: 140
  },
  imageRelax: {
    width: "100%",
    height: 140,
    resizeMode: "cover"
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 80,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    resizeMode: "contain",
    width: 75
  }
});
