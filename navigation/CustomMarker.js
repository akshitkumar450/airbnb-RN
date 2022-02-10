import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";

const CustomMarker = ({ coordinates, price, isSelected, onChangeId }) => {
  return (
    <Marker
      identifier="place"
      coordinate={coordinates}
      onPress={() => onChangeId()}>
      {/**custom marker */}
      <View
        style={tw`bg-${isSelected ? "black" : "white"} border-2 rounded-full`}>
        <Text style={tw`text-${isSelected ? "white" : "black"} p-1`}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
