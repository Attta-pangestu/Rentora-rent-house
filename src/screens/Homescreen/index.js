import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { data } from "./../../router/data";
import { MyCard } from "../../components";
import Carousel from "react-native-snap-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const Homescreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.areaContainer}>
        <View>
          <TouchableOpacity activeOpacity={0.7} style={styles.location}>
            <Text style={styles.fontLoc}>Location</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="#8C9896" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.city}>
          <FontAwesome name="map-marker" size={24} color="#65A1A0" />
          <Text style={styles.fontCity}>JAKARTA, ID</Text>
        </TouchableOpacity>

        <View>
          <Ionicons name="notifications" size={24} color="#8C9896" />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("SearchScreen")}
        style={styles.buttonSearch}
      >
        <View style={styles.areaButton}>
          <View style={styles.areaInButton}>
            <Ionicons
              name="search-outline"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Text style={styles.fontButton}>Search House</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="filter-menu"
              size={24}
              color="white"
              style={styles.filter}
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.carouselContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("ProductScreen")}
        >
          <Carousel
            data={data}
            layout="stack"
            layoutCardOffset={9}
            renderItem={MyCard}
            sliderWidth={300}
            itemWidth={300}
            inactiveSlideShift={0}
            useScrollView={true}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  areaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 10,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  fontLoc: {
    color: "#8C9896",
  },
  city: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  fontCity: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },
  buttonSearch: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  areaButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
    shadowColor: "black",
  },
  areaInButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  fontButton: {
    color: "grey",
    fontSize: 12,
  },
  filter: {
    backgroundColor: "black",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  carouselContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
