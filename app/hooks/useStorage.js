import { useContext, useState, useEffect } from "react";
import storage from "../storage/storage";
import StorageContext from "../storage/context";

const useStorage = (name, id, pratice, navigation) => {
  const { storageDB } = useContext(StorageContext);

  const topicIndex = () => storageDB.findIndex((topic) => topic.name === name);

  //Exercises array
  const exercisesDone = () => {
    //Params: name, exerciseDetailsId, recordId

    //Tópico > exercício
    const exerciseIndex = storageDB[topicIndex()].exercises.findIndex(
      (ex) => ex.id === id
    );

    //Tópico > exercício > detalhes
    const storageExerciseDetails =
      storageDB[topicIndex()].exercises[exerciseIndex].details;

    return storageExerciseDetails.exercisesDone;
  };

  //Exercises Actions
  const entryIndex = (recordId) =>
    exercisesDone().findIndex((item) => item.id === recordId);

  const newEntry = (entry) => {
    //Nova entrada
    exercisesDone().push(entry);

    //Introdução na BD
    storage.storeData(storageDB);

    //Redirecionamento
    navigation.navigate("TopicDetails", storageDB[topicIndex()]);
  };

  const newEntryEdit = (editRecord, record) => {
    //Nota
    const currentRecord = exercisesDone()[entryIndex(editRecord.id)];

    currentRecord.content = record;

    storage.storeData(storageDB);

    navigation.navigate("TopicDetails", storageDB[topicIndex()]);
  };

  const deleteEntry = (recordId) => {
    //Remoção
    exercisesDone().splice(entryIndex(recordId), 1);

    //Nova BD
    storage.storeData(storageDB);
  };

  const editEntry = (recordId) => {
    //Nota
    const editRecord = exercisesDone()[entryIndex(recordId)];

    navigation.navigate("ExercisePratice", { editRecord, pratice, id, name });
  };

  //Favorites Actions
  const getFavorites = () => {
    const checkFavorites = storageDB.map((store) =>
      store.exercises.filter((exArray) => exArray.favorite)
    );
    const favoritesResult = checkFavorites.filter((ex) => ex.length !== 0);
    if (favoritesResult.length !== 0) return favoritesResult[0];
    return null;
  };

  const toggleFavorite = () => {
    //Find exercise
    const exerciseIndex = storageDB[topicIndex()].exercises.findIndex(
      (ex) => ex.id === id
    );

    //Topic > Exercise
    const exercise = storageDB[topicIndex()].exercises[exerciseIndex];

    //Toogle favorite
    exercise.favorite = !exercise.favorite;

    //Introduzir na BD
    storage.storeData(storageDB);
  };

  //Exercises
  const getExercises = () => {
    const exercisesArray = storageDB.map((topic) => topic.exercises);
    const exercises = [];
    exercisesArray.forEach((exercise) => {
      exercises.push(exercise[0]);
    });
    return exercises;
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return {
    deleteEntry,
    editEntry,
    newEntry,
    newEntryEdit,
    storageDB,
    getFavorites,
    toggleFavorite,
    getExercises
  };
};
export default useStorage;
