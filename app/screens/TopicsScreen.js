import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StorageContext from "../storage/context";
import Title from "../components/Title";
import Text from "../components/Text";
import Topic from "../components/TopicCard";
import Container from "../components/Container";
import colors from "../config/colors";

const TopicsScreen = ({ navigation }) => {
  const { storageDB } = useContext(StorageContext);

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Topics</Title>
      <Text style={styles.subtitle}>
        Choose a topic to explore the exercises
      </Text>
      <ScrollView>
        <Container>
          {storageDB &&
            storageDB.map((topic, index) => (
              <Topic
                title={topic.name}
                key={index}
                img={topic.topicImage}
                textColor={topic.topicTitleColor}
                bgColor={topic.topicBgColor}
                onPress={() => navigation.navigate("TopicDetails", topic)}
              />
            ))}
        </Container>
      </ScrollView>
    </View>
  );
};

export default TopicsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige
  },
  title: {
    marginTop: 50,
    marginBottom: 10
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20
  }
});
