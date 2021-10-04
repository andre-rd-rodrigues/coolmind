import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TopicsNavigator from "./TopicsNavigator";
import FavoritesScreen from "../screens/FavoritesScreen";
import SearchScreen from "../screens/SearchScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveColor: "#eee",
        tabBarStyle: {
          marginBottom: 20
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Topics"
        component={TopicsNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
