import { StyleSheet } from "react-native";
import { COLORES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    paddingHorizontal: 10,
    width: "100%",
    marginTop: 150,
    padding: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingStart: 28,
  },
  textStyle: {
    color: COLORES.white,
    textTransform: "capitalize",
    fontFamily: FONTS.bold,
  },
  textCreator: {
    color: COLORES.white,
    textTransform: "capitalize",
    fontFamily: FONTS.light,
  },
  input: {
    backgroundColor: COLORES.cardBg,
    color: COLORES.white,
    textAlign: "left",
    padding: 15,
    borderRadius: 10,
    width: "84%",
    fontSize: 10,
  },
  x: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  inputIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
});
export default styles;
