import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Title from "../components/Title";
import Screen from "../components/Screen";
import Container from "../components/Container";
import defaultStyles from "../config/styles";
import Card from "../components/ExerciseCard";
import SearchInput from "../components/SearchInput";
import NotFound from "../components/NotFound";

const FavoritesScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/favorites.png")} style={styles.image} />
      <Title style={styles.title}>Favorites</Title>
      <View style={styles.searchContainer}>
        <SearchInput />
      </View>
      <Container scrollView>
        <NotFound text="No favorite exercises" />
      </Container>
    </Screen>
  );
};

export default FavoritesScreen;

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
