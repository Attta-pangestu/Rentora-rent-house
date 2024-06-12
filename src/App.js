import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Router from "./router";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
