import { Text, TouchableOpacity, View, TextInput, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { data } from "./../../router/data";
import Carousel from "react-native-snap-carousel";
import { MyCard } from "../../components";
import { styles } from './style'

const Homescreen = ({ navigation }) => {
  const [userInput, setUserInput] = useState("");
  const [carouselData, setCarouselData] = useState(data);
  const carouselRef = useRef(null);

  const filterData = () => {
    if (userInput === '') {
      setCarouselData(data);
    } else {
      const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(userInput.toLowerCase())
      );
      setCarouselData(filteredData);
    }
  };

  const onSearch = () => {
    filterData();
    if (carouselData.length > 0 && carouselRef.current) {
      carouselRef.current.snapToItem(0);
    }
  };

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

      <View
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
            <TextInput
              placeholder="Search House"
              value={userInput}
              onChangeText={setUserInput}
              onSubmitEditing={onSearch}
              style={{ flex: 1 }}
            />
            <MaterialCommunityIcons
              name="filter-menu"
              size={24}
              color="white"
              style={styles.filter}
            />
          </View>
        </View>
      </View>

      <View style={styles.carouselContainer}>
        <Carousel
          ref={carouselRef}
          data={carouselData}
          layout="default"
          renderItem={({ item, index }) => <MyCard item={item} index={index} />}
          sliderWidth={300}
          itemWidth={300}
          activeSlideShift={0}
          useScrollView={true}
        />
      </View>
    </View>
  );
};

export default Homescreen;