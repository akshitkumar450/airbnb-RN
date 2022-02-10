import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GuestsScreen from "../screens/GuestsScreen";
import {
  Fontisto,
  FontAwesome5,
  FontAwesome,
  Feather,
  EvilIcons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

function BottomNaviation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f15454",
      }}>
      <Tab.Screen
        name={"Explore"}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Fontisto name="search" size={25} />,
        }}
      />
      <Tab.Screen
        name={"Saved"}
        component={GuestsScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="heart-o" size={25} />,
        }}
      />
      <Tab.Screen
        name={"Airbnb"}
        component={GuestsScreen}
        options={{
          tabBarIcon: () => <FontAwesome5 name="airbnb" size={25} />,
        }}
      />
      <Tab.Screen
        name={"messages"}
        component={GuestsScreen}
        options={{
          tabBarIcon: () => <Feather name="message-square" size={25} />,
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={GuestsScreen}
        options={{
          tabBarIcon: () => <EvilIcons name="user" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNaviation;
