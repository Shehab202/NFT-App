import { View, Text } from "react-native";
import styles from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../button/Button";
const NFTInfo = ({ item }) => {
  const { views, comments, price, love } = item;
  return (
    <View style={styles.container}>
      <View style={styles.boxes}>
        <Ionicons name="eye-outline" size={20} color="white" />
        <Text style={styles.infoContent}>{views}</Text>
      </View>
      <View style={styles.boxes}>
        <Foundation name="comments" size={20} color="white" />
        <Text style={styles.infoContent}>{comments}</Text>
      </View>
      <View style={styles.boxes}>
        <FontAwesome5 name="ethereum" size={20} color="white" />
        <Text style={styles.infoContent}>{price}</Text>
      </View>
      {love && (
        <View>
          
           <Button
            icon={<AntDesign name="heart" size={16} color="white"  style={styles.buttonStyle}/>}
            
          /> 
        </View>
      )}
    </View>
  );
};

export default NFTInfo;
