import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "../components/HomeScreen/Header";

const HomeScreen = () => {
  return (
    <View style={tw`pt-8`}>
      <Header />
    </View>
  );
};

export default HomeScreen;
