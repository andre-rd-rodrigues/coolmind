import React, { useState } from "react";
import { StyleSheet, Image, View, Alert, Platform } from "react-native";
import { WebView } from "react-native-webview";
import Title from "../components/Title";
import Text from "../components/Text";
import Screen from "../components/Screen";
import Button from "../components/Button";
import Container from "../components/Container";
import Record from "../components/Record";
import useStorage from "../hooks/useStorage";
import colors from "../config/colors";

const ExerciseDetailsScreen = ({ navigation, route }) => {
  const [key, setKey] = useState(0);

  //Topic name
  const { name } = route.params;

  //Exercise
  const { details, pratice, id } = route.params.exercise;

  const { deleteEntry, editEntry } = useStorage(name, id, pratice, navigation);

  //Actions
  const alertDelete = (id) => {
    Alert.alert(
      "Delete",
      "This operation will permanently delete this entry. Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => handleRemove(id) }
      ]
    );
  };

  const handleRemove = (recordId) => {
    deleteEntry(recordId);

    //Force reload
    setKey((prevKey) => prevKey + 1);
  };

  const handleEdit = (recordId) => {
    editEntry(recordId);
  };

  return (
    <View style={styles.container}>
      <Container scrollView>
        <Image source={details.detailsImage} style={styles.image} />
        <Title>{details.title}</Title>
        <Text style={styles.text}>{details.description}</Text>
        <Button
          title="Get started"
          color="blue"
          onPress={() =>
            navigation.navigate("ExercisePratice", { name, pratice, id })
          }
        />
        <View style={styles.recordSection}>
          {details.exercisesDone.map((exercise) => (
            <Record
              key={exercise.id}
              record={exercise}
              onPressRemove={alertDelete}
              onPressEdit={handleEdit}
            />
          ))}
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige
  },
  image: {
    alignSelf: "center",
    width: 300,
    height: 200,
    marginBottom: 20,
    resizeMode: "contain"
  },
  text: {
    marginBottom: 15,
    lineHeight: 30,
    textAlign: "justify"
  },
  recordSection: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: "flex-end"
  }
});
export default ExerciseDetailsScreen;
