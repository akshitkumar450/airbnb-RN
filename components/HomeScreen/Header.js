import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import bg from "../../assets/wallpaper.jpg";
import tw from "tailwind-react-native-classnames";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`h-1/2`}>
      <ImageBackground
        source={bg}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}>
        <View
          style={tw` items-center rounded-full bg-white mt-10  w-3/4 mx-auto p-3 `}>
          <Pressable
            style={tw`flex-row items-center`}
            onPress={() => navigation.navigate("DestinationSearch")}>
            <FontAwesome5
              name="search"
              size={20}
              style={tw`text-red-500 mr-2`}
            />
            <Text style={tw`text-xl text-center`}>where you want to go?</Text>
          </Pressable>
        </View>

        <View style={tw`p-1 flex-1 justify-center`}>
          <View style={tw`w-3/5`}>
            <Text style={[tw` text-white`, { fontSize: 50 }]}>Go Near</Text>
          </View>
          <Pressable
            style={tw`bg-white rounded-md w-60 p-2 mt-5`}
            onPress={() => console.log("pressed")}>
            <Text style={tw`text-xl text-center`}>Explore nearby stays</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
