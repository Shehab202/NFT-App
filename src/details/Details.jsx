import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import NFTInfo from "../nftInfo/NFTInfo";
import NFTTitle from "../nftTitle/NFTTitle";
import AntDesign from "@expo/vector-icons/AntDesign";
const Details = () => {
  const navigate = useNavigation();
  const backHandler = () => {
    navigate.goBack();
  };
  const route = useRoute();
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pearent}>
        <Image style={styles.img} source={item.image} />
        <View style={styles.content}>
          {item.avatars.map((avatar, index) => {
            return (
              <Image key={index} source={avatar.image} style={styles.avatar} />
            );
          })}
        </View>
        <TouchableOpacity style={styles.icons} onPress={() => backHandler()}>
          <AntDesign name="arrowleft" size={27} style={styles.AntDesign} />
        </TouchableOpacity>
      </View>

      <NFTTitle item={item} />
      <NFTInfo item={item} />
      <View style={styles.textStyle}>
        <Text style={styles.title}>contract Address</Text>
        <Text style={styles.title}>{item.address}</Text>
      </View>
      <View style={styles.textStyle}>
        <Text style={styles.title}>token-ID</Text>
        <Text style={styles.title}>{item.tokenId}</Text>
      </View>
      <View style={styles.textStyle}>
        <Text style={styles.title}>token Standerd</Text>
        <Text style={styles.title}>{item.tokenSt}</Text>
      </View>
      <View style={styles.textStyle}>
        <Text style={styles.title}>blockchain</Text>
        <Text style={styles.title}>{item.blockchain}</Text>
      </View>
      <View style={styles.topBid}>
        <Text style={[styles.topBidText, { marginBottom: 10 }]}>Top Bid</Text>
        <Text style={styles.topBidText}>{item.topBid}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Details;
