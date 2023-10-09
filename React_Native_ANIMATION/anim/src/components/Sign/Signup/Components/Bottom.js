import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const Bottom = ({ navigation }) => {
  const translateX = useSharedValue(0);

  return (
    <Animated.View
      style={{ marginHorizontal: 16, marginBottom: 16, width: "100%" }}
      entering={FadeIn.duration(1000)}
    >
      <Animated.Text
        style={{ fontSize: 25, fontWeight: "bold", color: "#000" }}
        entering={FadeInDown.delay(1000).duration(1000)}
      >
        Hey there, curious one!
      </Animated.Text>

      <Animated.View
        style={[{ marginTop: 16, marginBottom: 20, width: "100%" }]}
        entering={FadeInUp.delay(2000).duration(2000)}
        layout={Layout}
        delay={2000}
      >
        <TextInput
          placeholder="NAME"
          placeholderTextColor={"#FFF"}
          style={{
            width: "90%",
            borderBottomColor: "#dcdcdc",
            borderBottomWidth: 1,
            padding: 5,
            color: "#FFF",
            fontSize: 10,
            fontWeight: "600",
            marginBottom: 12,
          }}
        />
        <TextInput
          placeholder="EMAIL/LOGIN"
          placeholderTextColor={"#fff"}
          style={{
            width: "90%",
            borderBottomColor: "#dcdcdc",
            borderBottomWidth: 1,
            padding: 5,
            color: "#fff",
            fontSize: 10,
            fontWeight: "600",
            marginBottom: 12,
          }}
        />
        <TextInput
          placeholder="PASSWORD"
          secureTextEntry={true}
          placeholderTextColor={"#fff"}
          style={{
            width: "90%",
            borderBottomColor: "#dcdcdc",
            borderBottomWidth: 1,
            padding: 5,
            color: "#fff",
            fontSize: 10,
            fontWeight: "600",
            marginBottom: 12,
          }}
        />
        <TextInput
          placeholder="REPEAT PASSWORD"
          secureTextEntry={true}
          placeholderTextColor={"#fff"}
          style={{
            width: "90%",
            borderBottomColor: "#dcdcdc",
            borderBottomWidth: 1,
            padding: 5,
            color: "#fff",
            fontSize: 10,
            fontWeight: "600",
            marginBottom: 12,
          }}
        />
      </Animated.View>

      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
        }}
      >
        <Animated.View
          entering={FadeInDown.delay(2500).duration(2500)}
          onTouchEnd={() => navigation.navigate("SigUp")}
        >
          <TouchableOpacity
            style={{
              padding: 8,
              borderRadius: 75,
              borderWidth: 1,
              borderColor: "#fff",
              paddingHorizontal: 16,
            }}
            onTouchEnd={() => {}}
          >
            <Text
              style={{
                fontSize: 11,
                fontWeight: "800",
                color: "#fff",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Create an account
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
