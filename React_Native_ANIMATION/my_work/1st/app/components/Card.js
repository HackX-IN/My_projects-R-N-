import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import { Link, router, useNavigation } from "expo-router";

const Card = ({ item, index }) => {
  const AnimatedLink = Animated.createAnimatedComponent(Link);
  const navigation = useNavigation();
  console.log(item);
  const handleCardPress = () => {
    navigation.navigate("product", {
      item: item,
    });
  };
  return (
    <Animated.View
      onTouchEnd={handleCardPress}
      style={[styles.card, { borderColor: index % 2 === 0 ? "blue" : "red" }]}
      entering={
        index % 2 === 0
          ? FadeInLeft.delay(800)
              .duration(100)
              .easing(Easing.linear)
              .springify()
              .damping(20)
          : FadeInRight.delay(800)
              .duration(100)
              .easing(Easing.linear)
              .springify()
              .damping(20)
      }
    >
      <Animated.Image
        sharedTransitionTag={`image-${item.id}`}
        source={item.imageURL}
        style={{
          resizeMode: "contain",
          width: 150,
          height: 150,
          alignSelf: "center",
        }}
      />

      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
        {item.name}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>
        {item.version}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
        {`$${item.price.toFixed(2)}`}
      </Text>
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "50%",
    height: 300,
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 8,
    borderWidth: 1, // Add border width
    borderColor: "blue", // Set the default border color
  },
});
