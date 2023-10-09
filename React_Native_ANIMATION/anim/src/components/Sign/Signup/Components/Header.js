import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IMAGE_Url } from "../../../../constants/Index";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const Header = () => {
  return (
    <View style={{ marginTop: 18 }}>
      <Animated.Image
        entering={FadeInUp.delay(500).duration(500)}
        source={{ uri: IMAGE_Url }}
        style={{ height: 50, width: 50, tintColor: "white" }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
