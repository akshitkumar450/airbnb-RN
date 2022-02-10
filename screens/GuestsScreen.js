import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Guests from "../components/HomeScreen/Guests";

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infrants, setInfrants] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={tw`px-4 flex-1 justify-between`}>
      <View>
        <Guests
          type="Adults"
          age="Ages 13 or above"
          count={adults}
          onChangeCount={setAdults}
        />
        <Guests
          type="Children"
          age="Ages 2- 12"
          count={children}
          onChangeCount={setChildren}
        />
        <Guests
          type="Infrants"
          age="Under 2"
          count={infrants}
          onChangeCount={setInfrants}
        />
      </View>

      <Pressable
        onPress={() => {
          // navigation.navigate("SearchResults");
          // nesting navigation
          // HomeTab->Explore->SearchResultsNavigation
          navigation.navigate("HomeTab", {
            screen: "Explore",
            params: {
              screen: "SearchResultsNavigation",
            },
          });
        }}>
        <View style={tw`bg-red-500 rounded-md p-2 mb-8`}>
          <Text style={tw`text-white text-center text-xl`}>search</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
