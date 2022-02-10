import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import CustomMarker from "../navigation/CustomMarker";
import { data } from "../components/HomeScreen/feed";
import PostCarousel from "../components/HomeScreen/PostCarousel";
import { useNavigation } from "@react-navigation/native";
const MapScreen = () => {
  const navigation = useNavigation();
  const [selectId, setSelectId] = useState(null);
  const width = useWindowDimensions().width;
  const mapRef = useRef();
  const placeRef = useRef();

  //   two way binding between flatlist and map
  const viewConfigRef = useRef({ itemVisiblePercentThreshold: 70 });
  const viewItems = useRef(({ viewableItems }) => {
    // console.log(viewableItems);
    if (viewableItems.length > 0) {
      setSelectId(viewableItems[0].item.id);
    }
  });

  // for automating scrolling to the place on which we clicked on map and show the effect of selecting that place on map
  useEffect(() => {
    if (!selectId || !placeRef) return;
    const index = data.findIndex((place) => place.id === selectId);
    placeRef?.current?.scrollToIndex({ index });

    const selectedPlace = data[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    // to come in view
    mapRef.current.animateToRegion(region);
    // zoom and fit
    mapRef.current.fitToSuppliedMarkers(["place"], {
      edgePadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    });
    // console.warn("scroll", selectId);
  }, [selectId]);

  return (
    <View>
      <MapView
        ref={mapRef}
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
          ref={placeRef}
          viewabilityConfig={viewConfigRef.current} //visiblity >70
          //   the item which is visible then it should set the particular price on map
          onViewableItemsChanged={viewItems.current}
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
              onPress={() => navigation.navigate("DetailScreen", { item })}
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
