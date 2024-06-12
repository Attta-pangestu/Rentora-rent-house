import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Homescreen,
  Splashscreen,
  FavoritesScreen,
  CartScreen,
} from "../screens";
import { BottomTabs } from "../components";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTabs {...props} />}
    >
      <Tab.Screen name="HomeScreen" component={Homescreen} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
