import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const icon = ({ label, focus }) => {
  const color = focus ? "white" : "gray";
  switch (label) {
    case "HomeScreen":
      return <FontAwesome name="home" size={24} color={color} />;
    case "FavoritesScreen":
      return <FontAwesome name="heart" size={24} color={color} />;
    case "CartScreen":
      return <FontAwesome name="shopping-cart" size={24} color={color} />;
    case "SettingScreen":
      return <FontAwesome name="cog" size={24} color={color} />;
  }
};

function BottomTabs({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const Icon = icon({ label, focus: isFocused });

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tab]}
            key={index}
          >
            <View style={styles.logoContainer}>{Icon}</View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 14,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabs;
