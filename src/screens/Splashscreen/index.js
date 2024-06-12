import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const Splashscreen = ({ navigation }) => {
  const animation = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainApp");
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 400,
          height: 400,
        }}
        source={require("../../assets/lottie/splashscreen.json")}
      />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
