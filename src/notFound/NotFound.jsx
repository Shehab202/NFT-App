import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.opsStyle}>OPSSSS</Text>
      <Text style={styles.notFoundText}>This NFT NotFound</Text>
    </View>
  );
};

export default NotFound;
