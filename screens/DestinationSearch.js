import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import SearchBar from "../components/HomeScreen/SearchBar";
import { search } from "../components/HomeScreen/search";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SearchRow from "../components/HomeScreen/SearchRow";

const DestinationSearch = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/***
       * 
       <SearchBar placeholder="where are you going?" />
       */}
      <GooglePlacesAutocomplete
        placeholder="where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate("GuestsScreen");
        }}
        // to geometry location,lng,lat
        fetchDetails={true}
        query={{
          key: "YOUR API KEY",
          language: "en",
          types: "(cities)", //to show only cities
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            color: "#5d5d5d",
            fontSize: 16,
          },
        }}
        // to disable default styles
        // suppressDefaultStyles
        // for our custom list of results
        renderRow={(item) => <SearchBar item={item} />}
      />
      <FlatList
        data={search}
        renderItem={({ item }) => <SearchRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({});
