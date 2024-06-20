import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Home1, HouseDetail1, HouseDetail2, HouseDetail3 } from "../../assets/images";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ProductScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={Home1}
          style={{ width: 350, height: 500 }}
          imageStyle={{ borderRadius: 30 }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button]}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={24}
                color={"black"}
                onPress={() => navigation.navigate("MainApp")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button]}
              onPress={() => navigation.navigate("DetailScreen")}
            >
              <MaterialIcons name="3d-rotation" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.infoContainer}>
            <View>
              <Text style={[styles.fontName]}>Wooden Modern House</Text>
              <Text style={[styles.fontCity]}>Bali, Indonesia</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btnDetail} activeOpacity={0.7} onPress={() => navigation.navigate("DetailScreen")} >
                <Image style={{ width: 80, height: 80, borderRadius: 10 }} source={HouseDetail1} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnDetail} activeOpacity={0.7} onPress={() => navigation.navigate("DetailScreen")} >
                <Image style={{ width: 80, height: 80, borderRadius: 10 }} source={HouseDetail2} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnDetail]} activeOpacity={0.7} onPress={() => navigation.navigate("DetailScreen")} >
                <ImageBackground style={{ width: 80, height: 80, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} source={HouseDetail3} >
                  <Text style={styles.fontDetail}>+6</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View>
        <Text>Description</Text>
        <View style={styles.descContainer}>
          <View style={styles.subDescContainer}>
            <View>
              <MaterialCommunityIcons name="scale-bathroom" size={24} color="#65A1A0" />
            </View>
            <View>
              <Text style={styles.fontDesc}>bathroom</Text>
              <Text style={styles.fontDesc}>4 Rooms</Text>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;


