import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Card from "../components/ExerciseCard";
import Container from "../components/Container";
import ImageBackgroundScreen from "../components/ImageBackgroundScreen";
import Title from "../components/Title";
import SearchInput from "../components/SearchInput";
import colors from "../config/colors";
import NotFound from "../components/NotFound";

const TopicsScreen = ({ navigation }) => {
  return (
    <ImageBackgroundScreen
      uri={require("../assets/section_bg.png")}
      style={styles.container}
      color="beige"
    >
      <View style={styles.upperbar}></View>
      <Title textAlign="left" style={styles.title}>
        Search
      </Title>
      <View style={styles.searchContainer}>
        <SearchInput />
      </View>
      <NotFound text="No matching exercises found" />
      <Container scrollView></Container>
    </ImageBackgroundScreen>
  );
};

export default TopicsScreen;

const styles = StyleSheet.create({
  upperbar: {
    marginLeft: 15,
    marginTop: 60,
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
