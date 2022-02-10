import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const PostCarousel = ({ img, bed, bedroom, newPrice, description }) => {
  const width = useWindowDimensions().width;
  return (
    <View
      style={[
        tw` h-24 mx-2 rounded-lg  overflow-hidden bg-gray-200 flex-row items-center`,
        { width: width - 60 }, // to show next item little
      ]}>
      <View>
        <Image
          source={{
            uri: img,
          }}
          style={{
            height: "100%",
            resizeMode: "cover",
            aspectRatio: 1,
          }}
        />
      </View>

      <View style={tw` h-full ml-2`}>
        <Text style={tw` text-gray-600 mt-2`}>
          {bed} bed · {bedroom} bedroom
        </Text>
        <Text style={[tw`text-gray-600 my-2`]}>{description}</Text>
        <Text style={tw`text-lg text-gray-600 `}>
          <Text style={tw`text-black font-bold`}> ${newPrice}</Text> /night
        </Text>
      </View>
    </View>
  );
};

export default PostCarousel;
