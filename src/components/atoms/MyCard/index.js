import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MyCard = ({ item, index }) => {
  return (
    <View key={index}>
      <ImageBackground
        source={item.image}
        style={{ width: 300, height: 500 }}
        imageStyle={{ borderRadius: 30 }}
      >
        <View>
          <View style={styles.mapContainer}>
            <View style={styles.subMapContainer}>
              <FontAwesome name="map-pin" size={24} color="red" />
              <Text style={styles.fontMaps}>Map</Text>
            </View>
          </View>

          <View style={styles.cityContainer}>
            <View>
              <Text style={styles.cityFontName}>{item.name}</Text>
              <Text style={styles.cityFontBody}>{item.body}</Text>
            </View>
            <View style={styles.favorite}>
              <MaterialCommunityIcons
                name="heart-multiple-outline"
                size={24}
                color="white"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  mapContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 30,
    justifyContent: "flex-end",
  },
  subMapContainer: {
    backgroundColor: "#495868",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  fontMaps: { fontSize: 12, color: "white", fontWeight: "500", marginLeft: 10 },
  cityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 30,
    top: 280,
    left: 10,
  },
  cityFontName: {
    color: "white",
    fontWeight: "900",
    fontSize: 24,
    width: 200,
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  cityFontBody: {
    color: "white",
    fontWeight: "900",
    fontSize: 12,
    width: 200,
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  favorite: {
    backgroundColor: "#5B666C",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 30,
  },
});
