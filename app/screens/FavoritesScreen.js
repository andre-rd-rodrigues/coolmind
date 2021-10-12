import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Title from "../components/Title";
import Screen from "../components/Screen";
import Container from "../components/Container";
import Card from "../components/ExerciseCard";
import SearchInput from "../components/SearchInput";
import NotFound from "../components/NotFound";
import useStorage from "../hooks/useStorage";
import { useNavigation } from "@react-navigation/native";

const FavoritesScreen = () => {
  const { getFavorites } = useStorage();
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState(getFavorites());
  const [searched, setSearched] = useState("");

  //DISLIKE
  const handleRemove = () => {
    setFavorites(getFavorites());
  };

  //SEARCH
  const findFavoriteExercise = () => {
    if (searched.length > 0) {
      const exercises = favorites.filter((exercise) => {
        const name = exercise.brief.title.toLowerCase();
        const brief = exercise.brief.body.toLowerCase();
        return (
          name.includes(searched.toLowerCase()) ||
          brief.includes(searched.toLowerCase())
        );
      });
      return setFavorites(exercises);
    } else {
      setFavorites(getFavorites());
    }
  };

  //RENDER
  const Favorites = () => {
    if (favorites)
      return favorites.map((exercise) => (
        <Card
          key={exercise.id}
          exercise={exercise}
          topicName={exercise.topicName}
          removeLike={handleRemove}
          onPress={() =>
            navigation.navigate("ExerciseDetails", {
              exercise,
              name: exercise.topicName
            })
          }
        />
      ));

    return <NotFound text="No favorite exercises" noImage />;
  };

  //LIFECYCLE
  useEffect(() => {
    navigation.addListener("focus", () => setFavorites(getFavorites()));
  }, []);

  useEffect(() => {
    findFavoriteExercise();
    return () => {
      findFavoriteExercise();
    };
  }, [searched]);

  return (
    <Screen>
      <ScrollView>
        <Image
          source={require("../assets/favorites.png")}
          style={styles.image}
        />
        <Title style={styles.title}>Favorites</Title>
        <View style={styles.searchContainer}>
          <SearchInput
            placeholder="Search your favorite exercise..."
            searchInput={(search) => setSearched(search)}
            favorites
          />
        </View>
        <Container>
          <Favorites />
        </Container>
      </ScrollView>
    </Screen>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 20
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 25,
    fontStyle: "italic"
  },
  searchContainer: {
    paddingHorizontal: 10
  },
  image: {
    width: 240,
    height: 115,
    alignSelf: "flex-end",
    marginTop: 20
  }
});
