import React, { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { headphonesData } from "./Data/Data";
import Card from "./components/Card";
import Animated, {
  Easing,
  FadeIn,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";

const Product = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
        <View style={styles.header}>
          <Animated.Image
            entering={FadeIn.delay(100).easing(Easing.in).duration(100)}
            style={styles.img}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/5343/5343109.png",
            }}
          />
          <Animated.Image
            entering={FadeIn.delay(110).easing(Easing.in).duration(110)}
            style={styles.img}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/54/54481.png",
            }}
          />
        </View>
        <View style={[styles.header, { marginTop: 32 }]}>
          <Animated.View
            entering={FadeInLeft.delay(250)
              .duration(150)
              .springify()
              .damping(10)}
          >
            <Text
              style={{ fontSize: 22, fontWeight: "bold", letterSpacing: 0.9 }}
            >
              Wireless
            </Text>
            <Text
              style={{ fontSize: 22, fontWeight: "bold", letterSpacing: 0.9 }}
            >
              Headphones
            </Text>
          </Animated.View>
          <Animated.Image
            entering={FadeInRight.delay(250)
              .duration(150)
              .springify()
              .damping(10)}
            style={{ width: 80, height: 80, left: 14 }}
            source={require("./assets/bose.png")}
            resizeMode="contain"
          />
        </View>
        <View style={[{ marginTop: 16 }]}>
          <FlatList
            data={headphonesData}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 16,
              gap: 8,
              marginRight: 8,
            }}
            renderItem={({ item, index }) => (
              <Card
                item={item}
                index={index}
                key={index}
                headphonesData={headphonesData}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1EFF1",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },
  img: {
    height: 25,
    width: 25,
  },
});
