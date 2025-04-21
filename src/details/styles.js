import { StyleSheet } from "react-native";
import { COLORES, FONTS } from "../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORES.bg,
    paddingHorizontal: 15,
  },
  pearent: {
    position: "relative",
  },
  img: {
    width: 400,
    maxHeight: 400,
    borderRadius: 30,
    marginBottom: 15,
  },
  content: {
    flexDirection: "row",
    gap: 3,
    position: "absolute",
    bottom: 5,
    left: 30,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  textStyle: {
    width: "94%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: COLORES.cardBg,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  title: {
    color: COLORES.white,

    fontFamily: FONTS.bold,
  },
  topBid: {
    width: "90%",
    height: 90,
    backgroundColor: COLORES.cardBg,
    padding: 25,
    borderRadius: 15,
    fontFamily: FONTS.bold,
    marginTop: 15,
  },
  topBidText: {
    color: COLORES.white,
    fontFamily: FONTS.bold,
  },
  icons: {
    backgroundColor: COLORES.bg,
    width: 30,
    height: 30,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    top: 30,
    left: 30,
  },
  AntDesign: {
    color: COLORES.second,
  },
});
export default styles;
