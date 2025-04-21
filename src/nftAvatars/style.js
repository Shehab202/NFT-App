import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    gap: 3,
    position: "absolute",
    bottom: 10,
    right: 20,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});
export default styles;