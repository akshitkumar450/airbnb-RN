import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SearchResults from "../components/HomeScreen/SearchResults";
import SearchResultsNavigation from "./SearchResultsNavigation";
const Stack = createNativeStackNavigator();
const ExporeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResultsNavigation"
        component={SearchResultsNavigation}
        options={{
          title: "search your destination",
        }}
      />
    </Stack.Navigator>
  );
};

export default ExporeNavigation;
