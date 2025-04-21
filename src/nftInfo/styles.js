import { StyleSheet } from "react-native";
import { COLORES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    gap: 7,
  },
  boxes: {
    flexDirection: "row",
    gap: 3,
    backgroundColor: COLORES.second,
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 30,
  },
  infoContent: {
    color: COLORES.white,
  },
  buttonStyle: {
    backgroundColor: COLORES.bg,
    borderRadius: 100,
    borderColor: COLORES.second,
    borderWidth: 1,
    padding: 8,
    color:COLORES.second
  },
});
export default styles;
