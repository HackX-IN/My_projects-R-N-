import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "./Components/Header";
import { LinearGradient } from "expo-linear-gradient";
import Bottom from "./Components/Bottom";
import Animated, {
  Easing,
  FadeIn,
  FadeInLeft,
  FadeOut,
} from "react-native-reanimated";

const SignUp = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#A812B2", "#6C1EA6"]}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Animated.View
        entering={FadeIn.delay(300).duration(300).easing(Easing.in)}
        style={{
          marginHorizontal: 16,
          marginTop: 32,
          justifyContent: "space-between",
          alignItems: "flex-start",
          flex: 1,
        }}
      >
        <Header />
        <Bottom navigation={navigation} />

        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginBottom: 25,
          }}
          entering={FadeInLeft.duration(1000).delay(1000)}
          onTouchEnd={() => navigation.goBack()}
        >
          <Image
            style={{ width: 15, height: 15 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/3114/3114883.png",
            }}
          />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "700",
              color: "#000",
            }}
          >
            Back
          </Text>
        </Animated.View>
      </Animated.View>
    </LinearGradient>
  );
};

export default SignUp;
