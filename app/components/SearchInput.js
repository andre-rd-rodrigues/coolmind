import React, { useState, useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { Platform } from "react-native";
import defStyles from "../config/styles";

const SearchInput = ({
  placeholder,
  searchResults,
  searchInput,
  favorites
}) => {
  const [search, setSearch] = useState("");

  const { getExercises } = useStorage();

  const findExercise = () => {
    if (search.length > 0) {
      console.log(getExercises());
      const exercises = getExercises().filter((exercise) => {
        const name = exercise.brief.title.toLowerCase();
        return name.includes(search.toLowerCase());
      });
      return searchResults(exercises);
    } else {
      return searchResults([]);
    }
  };

  useEffect(() => {
    if (!favorites) return findExercise();
    return searchInput(search);
  }, [search]);

  return (
    <SearchBar
      placeholder={placeholder}
      onChangeText={setSearch}
      platform={Platform.OS === "android" ? "android" : "ios"}
      round
      value={search}
      showLoading={false}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputcontainer}
      inputStyle={styles.text}
      buttonTextStyle={styles.text}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputcontainer: {
    margin: -10,
    backgroundColor: "white"
  },
  container: {
    backgroundColor: "transparent"
  },
  text: {
    ...defStyles.text
  }
});
