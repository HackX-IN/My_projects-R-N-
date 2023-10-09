import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Circle, Svg } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
import { Pressable } from "react-native";

const App = () => {
  const background = "#44486f";
  const background_Stroke = "#303858";
  const background_stoke_color = "#A6a1fa";
  const Circle_length = 1000;

  const R = Circle_length / (2 * Math.PI);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const { width, height } = Dimensions.get("window");
  const progress = useSharedValue(0);

  // useEffect(() => {
  //   progress.value = withTiming(1, { duration: 2000 });
  // }, []);

  const Animatedprops = useAnimatedProps(() => {
    return {
      strokeDashoffset: Circle_length * (1 - progress.value),
    };
  });

  const ProgressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: background,
      }}
    >
      <ReText
        style={{
          fontSize: 60,
          color: "white",
          zIndex: 99,
          fontWeight: "900",
          letterSpacing: 3,
          textAlign: "center",
          width: "100%",
        }}
        text={ProgressText}
      />

      <Svg style={{ position: "absolute" }}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={background_Stroke}
          strokeWidth={30}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={background_stoke_color}
          strokeWidth={15}
          fill={background}
          strokeDasharray={Circle_length}
          strokeDashoffset={Circle_length}
          animatedProps={Animatedprops}
          strokeLinecap={"round"}
        />
      </Svg>
      <Pressable
        style={{
          width: width * 0.5,
          padding: 10,
          backgroundColor: "rgba(255,0,255,0.6)",
          bottom: 80,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
        }}
        onPress={() => {
          progress.value = withTiming(progress.value === 0 ? 1 : 0, {
            duration: 1000,
          });
        }}
      >
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
