import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import CustomMarker from "../navigation/CustomMarker";
import { data } from "../components/HomeScreen/feed";
const MapScreen = () => {
  const [selectId, setSelectId] = useState(null);
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
    </View>
  );
};

export default MapScreen;
