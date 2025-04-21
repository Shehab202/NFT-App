import { StyleSheet } from "react-native";
import { COLORES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 260,
    maxHeight: 260,
    borderRadius: 8,
    position: "relative",
  },
  arrowButton: {
    width: 150,
    borderRadius: 100,
    backgroundColor: COLORES.bg,
    position: "absolute",
    left: 100,
    top: 100,
    color:"red"
  },
  heartButton: {
    width: 50,
    borderRadius: 100,
    backgroundColor: COLORES.bg,
    position: "absolute",
    top: 10,
    right: 10,
  },
});
export default styles;
