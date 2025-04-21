import { StyleSheet } from "react-native";
import { COLORES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  opsStyle: {
    fontSize: 40,
    fontWeight: FONTS.bold,
    
    color: COLORES.white,
  },
  notFoundText: {
    fontSize: 30,
    fontWeight: FONTS.medium,
    color: COLORES.white,
    
  },
});
export default styles;
