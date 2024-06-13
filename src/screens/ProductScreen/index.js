import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Home1 } from "../../assets/images";
import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={Home1}
          style={{ width: 350, height: 500 }}
          imageStyle={{ borderRadius: 30 }}
        >
          <View style={styles.button}>
            <TouchableOpacity>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={24}
                color={"black"}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
