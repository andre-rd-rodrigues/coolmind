import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { Platform } from "react-native";
import defStyles from "../config/styles";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <SearchBar
      placeholder="Search your favorite exercise..."
      onChangeText={(e) => setSearch(e)}
      value={search}
      platform={Platform.OS === "android" ? "android" : "ios"}
      round
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
