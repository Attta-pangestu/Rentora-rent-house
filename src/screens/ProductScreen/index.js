import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Home1 } from "../../assets/images";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

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

          <View style={styles.textContainer}>
            <Text style={[styles.fontName]}>Wooden Modern House</Text>
            <Text style={[styles.fontName]}>Bali, Indonesia</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 30,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 30,
  },
  button: { backgroundColor: "#FFFFFF", padding: 10, borderRadius: 10 },
  textContainer: {},
});
