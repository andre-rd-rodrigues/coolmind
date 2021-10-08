import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Card from "../components/ExerciseCard";
import Container from "../components/Container";
import Title from "../components/Title";
import Screen from "../components/Screen";
import SearchInput from "../components/SearchInput";
import NotFound from "../components/NotFound";
import colors from "../config/colors";

const TopicsScreen = ({ navigation }) => {
  const [exercises, setExercises] = useState([]);

  return (
    <Screen>
      <View style={styles.upperbar}></View>
      <Title textAlign="left" style={styles.title}>
        Search
      </Title>
      <View style={styles.searchContainer}>
        <SearchInput
          placeholder="Search for an exercise..."
          searchResults={(results) => setExercises(results)}
        />
      </View>
      <Container scrollView>
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <Card
              key={exercise.id}
              exercise={exercise}
              topicName={exercise.topicName}
              onPress={() =>
                navigation.navigate("ExerciseDetails", {
                  exercise,
                  name: exercise.topicName
                })
              }
            />
          ))
        ) : (
          <NotFound text="No matching exercises found" />
        )}
      </Container>
    </Screen>
  );
};

export default TopicsScreen;

const styles = StyleSheet.create({
  upperbar: {
    marginLeft: 15,
    marginTop: 30,
    marginBottom: 3,
    width: 50,
    height: 5,
    backgroundColor: colors.yellow
  },
  title: {
    marginLeft: 15
  },
  searchContainer: {
    paddingHorizontal: 10
  }
});
