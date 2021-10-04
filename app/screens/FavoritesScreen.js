import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
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

  const handleRemove = () => {
    setFavorites(getFavorites());
  };

  useEffect(() => {
    navigation.addListener("focus", () => setFavorites(getFavorites()));
  }, []);

  const Favorites = () => {
    if (favorites)
      return favorites.map((ex) => (
        <Card
          key={ex.id}
          exercise={ex}
          topicName={ex.topicName}
          removeLike={handleRemove}
          onPress={() =>
            navigation.navigate("ExerciseDetails", {
              ex,
              name: ex.topicName
            })
          }
        />
      ));

    return <NotFound text="No favorite exercises" noImage />;
  };

  return (
    <Screen>
      <Image source={require("../assets/favorites.png")} style={styles.image} />
      <Title style={styles.title}>Favorites</Title>
      <View style={styles.searchContainer}>
        <SearchInput />
      </View>
      <Container scrollView>
        <Favorites />
      </Container>
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
