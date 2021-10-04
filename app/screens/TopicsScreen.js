import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StorageContext from "../storage/context";
import ImageBackgroundScreen from "../components/ImageBackgroundScreen";
import Title from "../components/Title";
import Text from "../components/Text";
import Topic from "../components/TopicCard";

const TopicsScreen = ({ navigation }) => {
  const { storageDB } = useContext(StorageContext);

  return (
    <ImageBackgroundScreen
      uri={require("../assets/section_bg.png")}
      style={styles.container}
    >
      <Title style={styles.title}>Topics</Title>
      <Text style={styles.subtitle}>
        Choose a topic to explore the exercises
      </Text>
      <ScrollView>
        <View style={styles.row}>
          {storageDB &&
            storageDB.map((topic, index) => (
              <Topic
                key={index}
                bg={topic.topicImage}
                onPress={() => navigation.navigate("TopicDetails", topic)}
              />
            ))}
        </View>
      </ScrollView>
    </ImageBackgroundScreen>
  );
};

export default TopicsScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    marginBottom: 10
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 10
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  }
});
