import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { HouseDetail2, HouseDetail3 } from "../../assets/images";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import Modal from "react-native-modal";

const DetailScreen = () => {
  const navigation = useNavigation();
  const animation = useRef(null);
  const [isModalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={HouseDetail3} style={{ flex: 1 }} >
        <TouchableOpacity activeOpacity={0.7} style={styles.btnBack} onPress={() => navigation.navigate("ProductScreen")}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={32}
            color={"black"}
          />
          <Text style={{ fontWeight: '700', fontSize: 18, color: '#9B9B9B' }}>Back to Product</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={{ top: 300, left: 30 }} activeOpacity={.7} onPress={() => toggleModal()}>
            <LottieView autoPlay loop source={require('../../assets/lottie/dotRedAnimation.json')} style={{ width: 80, height: 80, }} ref={animation} />
          </TouchableOpacity>
          <TouchableOpacity style={{ top: 150, left: 300 }} activeOpacity={.7}>
            <LottieView autoPlay loop source={require('../../assets/lottie/dotRedAnimation.json')} style={{ width: 80, height: 80, }} ref={animation} />
          </TouchableOpacity>
        </View>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}  >
            <Text style={styles.fontTitle}>Living Room</Text>
            <TouchableOpacity style={styles.btnBackModal} title="Hide Modal" onPress={toggleModal}>
              <Text style={styles.fontBack}>Back</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

export default DetailScreen;
