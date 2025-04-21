import React, { useEffect, useRef } from "react";
import styles from "./styles";
import { View, Text, Image, Animated } from "react-native";
import nft02 from "../../assets/images/nft08.jpg";
import nft03 from "../../assets/images/nft06.jpg";
import nft04 from "../../assets/images/nft04.jpg";
import Button from "../button/Button";
import { useNavigation } from "@react-navigation/native";
function Welcome() {
  const opacatyContainer = useRef(new Animated.Value(0)).current;
  const opacatyText = useRef(new Animated.Value(0)).current;
  const opacatyButton = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.ValueXY({ x: 100, y: 100 })).current;
  const handleAnimated = () => {
    Animated.sequence([
      Animated.timing(opacatyContainer, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(opacatyText, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(opacatyButton, {
          toValue: 1,
          duration: 1000,
          // delay: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };
  useEffect(() => {
    handleAnimated();
  }, [handleAnimated]);
  const navigation = useNavigation();
  const preessHandler = () => {
    navigation.navigate("layout");
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.imgContainer,
          {
            opacity: opacatyContainer,
            transform: [{ translateY: scale.y }, { translateX: scale.x }],
          },
        ]}
      >
        <View style={styles.card}>
          <Image source={nft03} style={styles.image} />
        </View>
        <View style={[styles.card, { marginTop: 25 }]}>
          <Image source={nft02} style={styles.image} />
        </View>
        <View style={styles.card}>
          <Image source={nft04} style={styles.image} />
        </View>
      </Animated.View>
      <Animated.Text style={[styles.largText, { opacity: opacatyText }]}>
        Find, Collect and Sell Amazinj NFTs
      </Animated.Text>
      <Animated.Text style={[styles.smallText, { opacity: opacatyText }]}>
        consequuntur asperiores magnam , optio laboriosam esse corporis, qui in
        perferendis.
      </Animated.Text>
      <Animated.View style={{ opacity: opacatyButton }}>
        <Button
          title="Get Started"
          preessHandler={preessHandler}
          buttonStyle={styles.buttonStyle}
        />
      </Animated.View>
    </View>
  );
}
export default Welcome;
