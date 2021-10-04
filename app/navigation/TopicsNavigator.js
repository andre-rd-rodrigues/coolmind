import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopicsScreen from "../screens/TopicsScreen";
import TopicDetailsScreen from "../screens/TopicDetailsScreen";
import ExerciseDetailsScreen from "../screens/ExerciseDetailsScreen";
import ExercisePraticeScreen from "../screens/ExercisePraticeScreen";

const TopicsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "card"
      }}
    >
      <Stack.Screen
        name="Feed"
        component={TopicsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopicDetails"
        component={TopicDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExerciseDetails"
        component={ExerciseDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExercisePratice"
        component={ExercisePraticeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TopicsNavigator;
