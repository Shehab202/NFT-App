import React from "react";
import { Text } from "react-native";
import Header from "../header/Header";
import Welcome from "../welcome/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Layout from "../layout/Layout";
import Details from "../details/Details";

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="header" component={Header} />
        <Stack.Screen name="layout" component={Layout} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Home;
