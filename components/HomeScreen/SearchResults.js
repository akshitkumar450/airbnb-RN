import { View, Text, FlatList } from "react-native";
import React from "react";
import Post from "./Post";
import tw from "tailwind-react-native-classnames";
import { data } from "./feed";

const SearchResults = () => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <Post
            img={item.image}
            bed={item.bed}
            bedRoom={item.bedRoom}
            description={item.title}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            total={item.totalPrice}
          />
        )}
      />
    </View>
  );
};

export default SearchResults;
