import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";


const NFTImage = ({ image  }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
    </View>
  );
};

export default NFTImage;
