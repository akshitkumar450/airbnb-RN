import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import CustomMarker from "../navigation/CustomMarker";
import { data } from "../components/HomeScreen/feed";
import PostCarousel from "../components/HomeScreen/PostCarousel";
const MapScreen = () => {
  const [selectId, setSelectId] = useState(null);
  const width = useWindowDimensions().width;
  return (
    <View>
      <MapView
        style={tw`h-full w-full`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {data.map((item) => (
          <CustomMarker
            key={item.id}
            coordinates={item.coordinate}
            price={item.newPrice}
            isSelected={item.id === selectId}
            onChangeId={() => setSelectId(item.id)}
          />
        ))}
      </MapView>

      <View style={[tw`absolute bottom-5 left-0 right-0`]}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal
          //   for auto snap
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={width - 60} //gets width of our items
          renderItem={({ item }) => (
            <PostCarousel
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
    </View>
  );
};

export default MapScreen;
