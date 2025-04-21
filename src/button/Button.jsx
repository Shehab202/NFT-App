import React from "react";
import { TouchableOpacity, Text } from "react-native";

function Button({ title, icon, preessHandler, buttonStyle ,stylest}) {
  const handleReturn = () => {
    if (!icon) {
      return <Text style={buttonStyle} >{title}</Text>;
    } else {
      return icon;
    }
  };
  return (
    <TouchableOpacity  onPress={preessHandler}>
      {handleReturn()}
    </TouchableOpacity>
  );
}
export default Button;
