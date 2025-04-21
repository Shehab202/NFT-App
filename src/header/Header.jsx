import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const Header = ({ setSearch }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.section}>
          <Image
            source={require("../../assets/images/avatars/avatar02.jpg")}
            style={styles.img}
          />
          <View>
            <View style={styles.content}>
              <Text style={styles.textStyle}>shehab hussein</Text>
              <MaterialCommunityIcons
                name="check-decagram"
                size={20}
                color="white"
              />
            </View>
            <View>
              <Text style={styles.textCreator}>creator</Text>
            </View>
          </View>
        </View>
        <View style={styles.x}>
          <TextInput
            placeholder="Search By NFT Name"
            placeholderTextColor="white"
            style={styles.input}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </View>
    </>
  );
};

export default Header;
