import DestinationSearch from "../screens/DestinationSearch";
import GuestsScreen from "../screens/GuestsScreen";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNaviation from "./BottomNavigator";
import DetailScreen from "./DetailScreen";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"HomeTab"}
          component={BottomNaviation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"DestinationSearch"}
          component={DestinationSearch}
          options={{
            title: "Search your destination",
          }}
        />
        <Stack.Screen
          name={"GuestsScreen"}
          options={{
            title: "How many people",
          }}
          component={GuestsScreen}
        />
        <Stack.Screen
          name={"DetailScreen"}
          options={{
            title: "Detail",
          }}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
