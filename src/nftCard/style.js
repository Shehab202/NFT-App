import { StyleSheet } from "react-native";
import { COLORES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:COLORES.cardBg,
    marginVertical:15,
    borderRadius:8
  },
  cardimage: {
    width: 300,
    height: 300,
  
  },
});
export default styles;
