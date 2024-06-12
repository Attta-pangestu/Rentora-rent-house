import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const MyCard = () => {
  return (
    <View key={index}>
      <ImageBackground
        source={ClipboardItem.image}
        style={{ width: 300, height: 500 }}
        imageStyle={{ borderRadius: 30 }}
      >
        <View>
          <View style={styles.container}>
            <View style={styles.subContainer}></View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 30,
    justifyContent: "flex-end",
  },
  subContainer: {
    backgroundColor: "#495868",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
