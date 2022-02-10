import { FlatList, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { data } from "../components/HomeScreen/feed";
import Header from "../components/HomeScreen/Header";
import Post from "../components/HomeScreen/Post";

const HomeScreen = () => {
  return (
    <View style={tw`pt-8`}>
      <Header />
      <View style={tw`h-1/2 `}>
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
              total={item.total}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
