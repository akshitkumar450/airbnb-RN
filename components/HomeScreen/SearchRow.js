import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const SearchRow = ({ item }) => {
  const navigation = useNavigation();

  return (
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
  );
};

export default SearchRow;
