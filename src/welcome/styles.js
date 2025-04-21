import { StyleSheet } from "react-native";
import { COLORES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORES.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    flexDirection: "row",
    gap: 12,
  },
  card: {
    width: 200,
    height: 240,
    backgroundColor: COLORES.cardBg,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: 13,
  },
  largText: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORES.white,
    width: "80%",
    marginTop: 20,
    fontFamily: FONTS.medium,
  },
  smallText: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORES.gray,
    width: "90%",
    marginTop: 20,
    fontFamily: FONTS.light,
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: COLORES.second,
    color: COLORES.white,
    padding: 12,
    width: 200,
    textAlign:"center",
    marginTop: 20,
    borderRadius: 10,
  },
});
export default styles;
