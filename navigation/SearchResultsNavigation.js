import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResults from "../components/HomeScreen/SearchResults";

const Tab = createMaterialTopTabNavigator();
const SearchResultsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIndicatorStyle: { backgroundColor: "#e91e63" },
      }}>
      <Tab.Screen name="List" component={SearchResults} />
      <Tab.Screen name="Map" component={SearchResults} />
    </Tab.Navigator>
  );
};

export default SearchResultsNavigation;
