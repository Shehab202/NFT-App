import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import NFTImage from "../nftImage/NFTImage";
import styles from "./style";
import NFTAvatars from "../nftAvatars/NFTAvatars";
import NFTTitle from "../nftTitle/NFTTitle";
import NFTInfo from "../nftInfo/NFTInfo";
import { useNavigation } from "@react-navigation/native";

const NFTCard = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate("details", { item })}>
          <View style={styles.cardimage}>
            <NFTImage image={item.image} />
          </View>
        </TouchableOpacity>
        <NFTAvatars avatars={item.avatars} />
        <NFTTitle item={item} />
        <NFTInfo item={item} />
      </View>
    </>
  );
};

export default NFTCard;
