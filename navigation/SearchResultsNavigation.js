import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResults from "../components/HomeScreen/SearchResults";
import MapScreen from "../screens/MapScreen";

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
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};

export default SearchResultsNavigation;
