import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Homescreen = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <View>
        <Text>Homescreen</Text>
      </View>
    </>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
