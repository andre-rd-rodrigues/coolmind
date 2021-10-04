import React, { useState, useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { Alert, StyleSheet } from "react-native";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import Title from "../components/Title";
import Text from "../components/Text";
import Screen from "../components/Screen";
import Button from "../components/Button";
import Container from "../components/Container";
import Area from "../components/TextArea";

const ExercisePraticeScreen = ({ route, navigation }) => {
  const [record, setRecord] = useState("");

  const { name, id, editRecord, pratice } = route.params;

  const { title, description } = pratice;

  const { newEntry, newEntryEdit } = useStorage(name, id, pratice, navigation);

  const handleSubmit = () => {
    if (record.length > 0 && !editRecord) {
      newEntry({
        name: name,
        id: uuidv4(),
        date: `Date:${dayjs(new Date()).format("DD/MM/YYYY")}`,
        content: record
      });
    } else if (record.length > 0 && editRecord) {
      newEntryEdit(editRecord, record);
    } else {
      Alert.alert("Empty Field", "Please type something before submiting");
    }
  };

  useEffect(() => {
    if (editRecord) setRecord(editRecord.content);
  }, [editRecord]);

  return (
    <Screen>
      <Container scrollView>
        <Title style={styles.title}>{title}</Title>
        <Text style={styles.text}>{description}</Text>
        <Area
          multiline
          numberOfLine={10}
          placeholder="Type something here..."
          onChangeText={setRecord}
          value={record}
          autoFocus={true}
        />
        <Button title="Submit" color="blue" onPress={handleSubmit} />
      </Container>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 40
  },
  image: {
    alignSelf: "center",
    width: 300,
    height: 200,
    marginBottom: 20
  },
  text: {
    marginBottom: 30,
    lineHeight: 30
  }
});
export default ExercisePraticeScreen;
