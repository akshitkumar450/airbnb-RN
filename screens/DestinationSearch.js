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
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DestinationSearch = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SearchBar placeholder="where are you going?" />
      <FlatList
        data={search}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("GuestsScreen")}>
            <View
              style={tw`flex-row border-2 border-gray-100 px-2 items-center  my-1`}>
              <View style={tw`bg-gray-100 rounded-md p-2`}>
                <Entypo name="location-pin" size={25} />
              </View>
              <View>
                <Text style={tw`ml-2`}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({});
