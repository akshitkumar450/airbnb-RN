import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Post = ({
  img,
  bed,
  bedroom,
  oldPrice,
  newPrice,
  description,
  total,
}) => {
  return (
    <View style={tw`p-5`}>
      <Image
        source={{
          uri: img,
        }}
        style={{
          width: "100%",
          height: 200,
          resizeMode: "cover",
          borderRadius: 20,
        }}
      />
      <Text style={tw` text-gray-600 mt-2`}>
        {bed} bed · {bedroom} bedroom
      </Text>
      <Text
        style={[tw`text-lg text-gray-600 my-2`, styles.ht]}
        numberOfLines={2}>
        {description}
      </Text>
      <Text style={tw`text-lg text-gray-600 `}>
        <Text style={tw`line-through`}>${oldPrice}</Text>{" "}
        <Text style={tw`text-black font-bold`}> ${newPrice}</Text> /night
      </Text>
      <Text style={tw`text-lg text-gray-600 underline`}>${total} total</Text>
    </View>
  );
};

export default Post;
const styles = StyleSheet.create({
  ht: {
    lineHeight: 20,
  },
});
