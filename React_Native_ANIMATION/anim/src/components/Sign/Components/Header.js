import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EVENLY_DISTRIBUTED_COLORS, IMAGE_Url } from "../../../constants/Index";

const Header = () => {
  const randomIndex = Math.floor(
    Math.random() * EVENLY_DISTRIBUTED_COLORS.length
  );
  const randomColor = EVENLY_DISTRIBUTED_COLORS[randomIndex];
  return (
    <View style={{ marginTop: 18 }}>
      <Image
        source={{ uri: IMAGE_Url }}
        style={{ height: 50, width: 50, tintColor: randomColor }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
