import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Guests = ({ type, age, count, onChangeCount }) => {
  return (
    <View
      style={tw`flex-row items-center justify-around my-5 border-t-2 border-b-2 py-2 border-gray-200`}>
      <View>
        <Text style={tw`text-xl`}>{type}</Text>
        <Text style={tw`text-xs text-gray-500`}>{age}</Text>
      </View>
      <View style={tw`flex-row items-center `}>
        <Pressable onPress={() => onChangeCount(count - 1)}>
          <View style={[tw`border-2 border-gray-500`, { borderRadius: 30 }]}>
            <Text style={tw`w-10 h-10  text-2xl text-center rounded-full`}>
              -
            </Text>
          </View>
        </Pressable>
        <Text style={tw`mx-5`}>{count}</Text>
        <Pressable onPress={() => onChangeCount(count + 1)}>
          <View style={[tw`border-2 border-gray-500`, { borderRadius: 30 }]}>
            <Text style={tw`w-10 h-10  text-2xl text-center rounded-full`}>
              +
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Guests;
