import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopicsScreen from "../screens/TopicsScreen";
import TopicDetailsScreen from "../screens/TopicDetailsScreen";
import ExerciseDetailsScreen from "../screens/ExerciseDetailsScreen";
import ExercisePraticeScreen from "../screens/ExercisePraticeScreen";
import colors from "../config/colors";

const TopicsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "card",
        headerStyle: {
          backgroundColor: colors.beige,
          shadowColor: "transparent",
          elevation: 0
        }
      }}
    >
      <Stack.Screen
        name="Topics"
        component={TopicsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopicDetails"
        component={TopicDetailsScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="ExerciseDetails"
        component={ExerciseDetailsScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="ExercisePratice"
        component={ExercisePraticeScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

export default TopicsNavigator;
