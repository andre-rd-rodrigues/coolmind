import React from "react";
import { StyleSheet, View } from "react-native";
import ImageBackgroundScreen from "../components/ImageBackgroundScreen";
import Title from "../components/Title";
import Text from "../components/Text";
import TopicCard from "../components/TopicCard";
import Container from "../components/Container";

const TopicsScreen = ({ navigation }) => {
  return (
    <ImageBackgroundScreen
      uri={require("../assets/section_bg.png")}
      style={styles.container}
    >
      <Title style={styles.title}>Topics</Title>
      <Text style={styles.subtitle}>
        Choose a topic to explore the exercises
      </Text>
      <Container scrollView>
        <View style={styles.row}>
          <TopicCard
            bg={require("../assets/topics_happiness.png")}
            onPress={() => navigation.navigate("HappinessScreen")}
          />
          <TopicCard bg={require("../assets/topics_relax.png")} />
        </View>
        <View style={styles.row}>
          <TopicCard bg={require("../assets/topics_work.png")} />
          <TopicCard bg={require("../assets/topics_problem.png")} />
        </View>
      </Container>
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
    marginBottom: 40
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
