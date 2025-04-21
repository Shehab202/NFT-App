import { StyleSheet } from "react-native";
import { COLORES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: "100%",
  },
  creatorContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  nameStyle: {
    color: COLORES.white,
    fontFamily: FONTS.bold,
    marginTop:10
  },
  iconStyle: { marginHorizontal: 5 },
});
export default styles;
