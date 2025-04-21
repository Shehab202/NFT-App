import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const NFTTitle = ({ item }) => {
  const { name, date, creator } = item;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nameStyle}>{name}</Text>
      </View>
      <View style={styles.creatorContent}>
        <View>
          <Text style={styles.nameStyle}>
            {creator}
            <MaterialCommunityIcons
              name="check-decagram"
              size={20}
              color="white"
              style={[styles.iconStyle, { marginRight: 10 }]}
            />
          </Text>
        </View>
        <View>
          <Text style={styles.nameStyle}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default NFTTitle;
