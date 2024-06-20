import { Image, ImageBackground, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Home1, HouseDetail1, HouseDetail2, HouseDetail3 } from "../../assets/images";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import MapView from "react-native-maps";
const ProductScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
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
          <Text style={styles.fontDesc}>Description</Text>
          <View style={styles.descContainer}>
            <View style={styles.descSubContainer}>
              <View>
                <MaterialCommunityIcons name="scale-bathroom" size={24} color="#65A1A0" />
              </View>
              <View>
                <Text style={styles.fontSpecTitle} >bathroom</Text>
                <Text style={styles.fontSpecValue}>4 Rooms</Text>
              </View>
            </View>
            <View style={styles.descSubContainer}>
              <View>
                <FontAwesome name="bathtub" size={24} color="#65A1A0" />
              </View>
              <View>
                <Text style={styles.fontSpecTitle} >bathroom</Text>
                <Text style={styles.fontSpecValue} >4 Rooms</Text>
              </View>
            </View>
          </View>
          <View style={{ marginHorizontal: 30, marginTop: 15 }}>
            <Text style={{ color: '#9B9B9B' }}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
          <View style={{ marginVertical: 10, marginHorizontal: 30 }}>
            <MapView
              style={{ height: 400, width: '100%' }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>

          <View style={styles.priceContainer}>
            <View>
              <Text style={styles.fontPrice}>Price</Text>
              <Text style={styles.fontMoney}>$870 <Text style={styles.fontMonth}>/ Month</Text> </Text>

            </View>
            <View>
              <TouchableOpacity activeOpacity={0.7} style={styles.btnAction}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Rent Now  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;


