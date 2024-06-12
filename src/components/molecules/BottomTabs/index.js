import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function BottomTabs({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

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

        // Determine whether the current tab is the middle one
        const isMiddleTab = index === Math.floor(state.routes.length / 2);

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
            key={index}
          >
            {isMiddleTab ? (
              <View style={styles.logoContainer}>
                <Image
                  source={require("./path-to-your-logo.png")}
                  style={styles.logo}
                />
              </View>
            ) : (
              <FontAwesome name="home" size={24} color="black" />
            )}
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
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default BottomTabs;
