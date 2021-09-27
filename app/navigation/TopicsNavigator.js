import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopicsScreen from "../screens/TopicsScreen";
import HappinessScreen from "../screens/HappinessScreen";

const FeedNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "card"
      }}
    >
      <Stack.Screen
        name="TopicsScreen"
        component={TopicsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HappinessScreen"
        component={HappinessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
