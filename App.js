import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/home/Home";
import { useFonts } from "expo-font";
export default function App() {
  const [fontsLoaded] = useFonts({
    InterBold: require("./assets/fonts/Cairo-Bold.ttf"),
    InterRegular: require("./assets/fonts/Cairo-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Cairo-SemiBold.ttf"),
    light: require("./assets/fonts/Cairo-Light.ttf"),
    medium: require("./assets/fonts/Cairo-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Home />
      <StatusBar style="auto" animated={true}/>
    </>
  );
}
