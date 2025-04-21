import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";

export default function NFTAvatars({ avatars }) {
  return (
    <View style={styles.container}>
    <View style={styles.content}>
      {
        avatars.map((avatar, index) => {
          return (
            <Image
              key={index}
              source={avatar.image}
              style={styles.avatar}
            />
          );
        })
      }
    </View>
      </View>
  );
}
