import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 30,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 30,
  },
  button: { backgroundColor: "#FFFFFF", padding: 10, borderRadius: 10 },
  infoContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginHorizontal: 15, height: '100%', bottom: 130 },
  fontName: { color: '#FFFFFF', fontWeight: '900', fontSize: 28, width: 200, textShadowColor: 'rgba(0,0,0,0.75)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10 },
  fontCity: { color: '#FFFFFF', fontWeight: '900', fontSize: 18, width: 200, textShadowColor: 'rgba(0,0,0,0.75)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10 },
  btnDetail: { backgroundColor: 'rgba(52,52,52,0.4)', padding: 4, borderRadius: 10 },
  fontDetail: { fontSize: 24, fontWeight: '500', color: '#FFFFFF' },
  fontDesc: { fontSize: 24, fontWeight: '500', color: 'black', marginHorizontal: 30, marginTop: 15 },
  descContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, marginHorizontal: 30, },
  descSubContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 },
  fontSpecTitle: { fontSize: 14, color: '#9B9B9B', fontWeight: '500' },
  fontSpecValue: { fontSize: 18, color: 'black', fontWeight: '700' }

});
