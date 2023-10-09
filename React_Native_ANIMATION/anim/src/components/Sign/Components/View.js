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

const Bottom = ({ isExpanded, setIsExpanded, navigation }) => {
  const translateX = useSharedValue(0);

  const Expand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      translateX.value = withTiming(10, {
        duration: 1000,
        easing: Easing.linear,
      });
    } else {
      translateX.value = withTiming(0, {
        easing: Easing.linear,
        duration: 1000,
      });
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const rTsyle = useAnimatedStyle(() => {
    return {
      opacity: isExpanded ? 1 : 0,
      transform: [
        {
          translateY: isExpanded
            ? withTiming(0, { duration: 1000, easing: Easing.linear })
            : withTiming(-10, { duration: 1000, easing: Easing.linear }),
        },
      ],
    };
  });
  return (
    <View style={{ marginHorizontal: 16, marginBottom: 16, width: "100%" }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#3c3c3c" }}>
        Interesting facts for the curious ones.
      </Text>
      <Text style={{ fontSize: 35, fontWeight: "bold", color: "#000" }}>
        Discover
      </Text>
      <Text style={{ fontSize: 35, fontWeight: "bold", color: "#000" }}>
        More.
      </Text>
      {isExpanded && (
        <Animated.View
          style={[{ marginTop: 16, marginBottom: 20, width: "100%" }, rTsyle]}
          entering={FadeIn.delay(500).easing(Easing.linear)}
          layout={Layout}
          delay={1000}
        >
          <TextInput
            placeholder="EMAIL/LOGIN"
            placeholderTextColor={"#000"}
            style={{
              width: "90%",
              borderBottomColor: "#dcdcdc",
              borderBottomWidth: 1,
              padding: 5,
              color: "#000",
              fontSize: 10,
              fontWeight: "600",
              marginBottom: 12,
            }}
          />
          <TextInput
            placeholder="PASSWORD"
            secureTextEntry={true}
            placeholderTextColor={"#000"}
            style={{
              width: "90%",
              borderBottomColor: "#dcdcdc",
              borderBottomWidth: 1,
              padding: 5,
              color: "#000",
              fontSize: 10,
              fontWeight: "600",
              marginBottom: 12,
            }}
          />
          <Animated.View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
            }}
            entering={FadeIn.delay(600).easing(Easing.linear).duration(600)}
            delay={2000}
          >
            <Text style={{ fontSize: 12, fontWeight: "600", color: "#000" }}>
              Remember me
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "600", color: "#8716AC" }}>
              Forgot Password?
            </Text>
          </Animated.View>
        </Animated.View>
      )}

      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          marginBottom: 70,
        }}
      >
        {!isExpanded && (
          <Animated.View
            entering={FadeIn}
            onTouchEnd={() => navigation.navigate("SigUp")}
          >
            <LinearGradient
              colors={["#A812B2", "#6C1EA6"]}
              style={{ width: 150, padding: 8, borderRadius: 75 }}
              onTouchEnd={() => {}}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "800",
                  color: "#fff",
                  textAlign: "center",
                  paddingHorizontal: 8,
                }}
              >
                Create an account
              </Text>
            </LinearGradient>
          </Animated.View>
        )}
        <Animated.View
          entering={FadeIn.delay(300).duration(300).easing(Easing.in)}
          style={animatedStyle}
        >
          <TouchableOpacity
            style={[
              {
                width: 100,
                padding: 8,
                borderRadius: 50,
                borderColor: "#DCDCDC",
                borderWidth: 1.2,
              },
            ]}
            onPress={Expand}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "800",
                color: "#000",
                textAlign: "center",
                paddingHorizontal: 8,
              }}
            >
              SIGN IN
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      {isExpanded ? (
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginBottom: 25,
          }}
          onTouchEnd={() => Expand()}
          entering={FadeInLeft.delay(500).duration(500)}
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
      ) : (
        <Animated.Text
          entering={FadeInLeft.duration(200).delay(200)}
          delay={3000}
          style={{
            fontSize: 12,
            fontWeight: "700",
            color: "#000",
            marginBottom: 25,
          }}
        >
          Take a Tour
        </Animated.Text>
      )}
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
