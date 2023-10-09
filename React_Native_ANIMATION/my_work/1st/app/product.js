import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {
  router,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import Animated, {
  BounceIn,
  Easing,
  FadeIn,
  FadeInDown,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnUI,
  BounceInDown,
  withDelay,
  withTiming,
  interpolateColor,
  Extrapolate,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

const product = () => {
  const { item } = useLocalSearchParams();
  const navigation = useNavigation();

  const Progress = useSharedValue(0);
  const Color = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(Progress.value, [0, 1], [1, 1.15]);
    const fadeInAnimation = withTiming(1, { duration: 100 });
    return {
      transform: [{ scale }],
      opacity: fadeInAnimation,
    };
  });

  const background = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      Color.value,
      [0, 1],
      ["rgba(255, 255, 255, 0)", "#000"]
    );
    const borderRadius = interpolate(
      Color.value,
      [0, 1],
      [5000, 0],
      Extrapolate.CLAMP
    );
    return {
      backgroundColor,
      borderRadius,
    };
  });

  useEffect(() => {
    Progress.value = withDelay(100, withSpring(1, BounceIn));
    Color.value = withTiming(1);
  }, []);

  return (
    <Animated.View style={[styles.container, background]}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Animated.Image
              entering={FadeIn.delay(100).duration(100)}
              style={styles.img}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/5343/5343109.png",
              }}
            />
          </TouchableOpacity>
          <Animated.Image
            entering={FadeInDown.delay(150)
              .duration(150)
              .springify()
              .damping(10)}
            style={styles.img1}
            source={require("./assets/bose.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.center}>
          <Animated.Image
            sharedTransitionTag={`image-${item.id}`}
            source={item.imageURL}
            style={[
              {
                width: 500,
                height: 500,
                resizeMode: "cover",
              },
              rStyle,
            ]}
          />
        </View>

        <Animated.View
          entering={FadeInDown.delay(500).duration(50).springify().damping(30)}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 32,
              marginBottom: 20,
            }}
          >
            <View style={{ width: 200, padding: 5, backgroundColor: "gray" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "800",
                  letterSpacing: 2,
                  color: "white",
                  textAlign: "center",
                }}
              >
                LIMITED EDITION
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: "orange",
                  borderRadius: 12.5,
                }}
              />
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: "blue",
                  borderRadius: 12.5,
                }}
              />
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: "purple",
                  borderRadius: 12.5,
                }}
              />
            </View>
          </View>
          <Text style={{ fontSize: 24, fontWeight: "600", color: "white" }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              color: "white",
              marginBottom: 20,
            }}
          >
            {item.brand + " " + item.version}
          </Text>
          <View
            style={{
              width: 150,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/2838/2838838.png",
              }}
              style={[styles.img, { tintColor: "#000" }]}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "800",

                color: "black",
                textAlign: "center",
                marginLeft: 16,
              }}
            >
              ${item.price}
            </Text>
          </View>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    position: "absolute",
    zIndex: 10,
  },
  img: {
    height: 25,
    width: 25,
    tintColor: "#fff",
    left: 8,
  },
  img1: {
    width: 80,
    height: 80,
    left: 14,
    tintColor: "#fff",
    top: 18,
    left: 310,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
