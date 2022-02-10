import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchBar = ({ placeholder }) => {
  const [input, setInput] = useState("");
  return (
    <View
      style={tw`border-2 bg-white flex-row justify-center items-center mx-auto w-4/5 rounded-full p-2 mt-10 h-14`}>
      <FontAwesome5 name="search" size={20} style={tw`text-red-500 mr-2`} />
      <TextInput
        style={tw`text-xl`}
        placeholder={placeholder}
        placeholderTextColor="gray"
        value={input}
        onChangeText={(text) => setInput(text)}
        autoFocus={true}
      />
    </View>
  );
};

export default SearchBar;
