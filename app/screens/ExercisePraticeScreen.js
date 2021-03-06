import React, { useState, useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Title from "../components/Title";
import Text from "../components/Text";
import Screen from "../components/Screen";
import Button from "../components/Button";
import Area from "../components/TextArea";
import UploadScreen from "../components/UploadScreen";
import colors from "../config/colors";

const ExercisePraticeScreen = ({ route, navigation }) => {
  const [record, setRecord] = useState("");
  const [uploadVisible, setUploadVisible] = useState(false);

  const { name, id, editRecord, pratice } = route.params;

  const { title, description } = pratice;

  const { newEntry, newEntryEdit, storageDB, topicIndex } = useStorage(
    name,
    id,
    pratice,
    navigation
  );

  const handleSubmit = () => {
    if (record.length > 0 && !editRecord) {
      newEntry({
        name: name,
        id: uuidv4(),
        date: `Date:${dayjs(new Date()).format("DD/MM/YYYY")}`,
        content: record
      });
      setUploadVisible(true);
    } else if (record.length > 0 && editRecord) {
      newEntryEdit(editRecord, record);
      setUploadVisible(true);
    } else {
      Alert.alert("Empty Field", "Please type something before submiting");
    }
  };

  useEffect(() => {
    if (editRecord) setRecord(editRecord.content);
  }, [editRecord]);

  return (
    <View style={styles.background}>
      <UploadScreen
        onDone={() => {
          setUploadVisible(false);
          navigation.navigate("TopicDetails", storageDB[topicIndex()]);
        }}
        visible={uploadVisible}
      />
      <ScrollView style={styles.container}>
        <Title style={styles.title}>{title}</Title>
        <Text style={styles.text}>{description}</Text>
        <Area
          multiline
          numberOfLine={10}
          placeholder="Type something here..."
          onChangeText={setRecord}
          defaultValue={record}
        />
        <Button title="Submit" color="blue" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.beige
  },
  container: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 25
  },
  image: {
    alignSelf: "center",
    width: 300,
    height: 200,
    marginBottom: 20
  },
  text: {
    marginBottom: 30,
    lineHeight: 30,
    textAlign: "justify"
  }
});
export default ExercisePraticeScreen;
