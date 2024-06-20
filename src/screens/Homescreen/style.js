import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    areaContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 50,
        marginHorizontal: 10,
    },
    location: {
        flexDirection: "row",
        alignItems: "center",
    },
    fontLoc: {
        color: "#8C9896",
    },
    city: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    fontCity: {
        fontSize: 16,
        fontWeight: "700",
        marginLeft: 10,
    },
    buttonSearch: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    areaButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        elevation: 5,
        shadowColor: "black",
    },
    areaInButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    fontButton: {
        color: "grey",
        fontSize: 12,
    },
    filter: {
        backgroundColor: "black",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    carouselContainer: {
        marginTop: 20,
        alignItems: "center",
    },
});