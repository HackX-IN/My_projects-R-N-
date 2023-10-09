import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { N, SQAURE_SIZE } from "../constants/Index";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const Sqaure = ({ index, Progress }) => {
  const COLORS = ["#1ffedc", "#ff5733", "#3498db", "#f1c40f", "#e74c3c"];
  const offsetAngle = (2 * Math.PI) / N;
  const finalAngle = offsetAngle * (N - 1 - index);

  const rotate = useDerivedValue(() => {
    if (Progress.value <= 2 * Math.PI) {
      return Math.min(finalAngle, Progress.value);
    }
    if (Progress.value - 2 * Math.PI < finalAngle) {
      return finalAngle;
    }
    return Progress.value;
  });

  const translateY = useDerivedValue(() => {
    if (rotate.value === finalAngle) {
      return withTiming(-N * SQAURE_SIZE);
    }
    if (Progress.value > 2 * Math.PI) {
      return withTiming((index - N) * SQAURE_SIZE);
    }
    return withTiming(-index * SQAURE_SIZE);
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotate.value}rad` },
        { translateY: translateY.value },
      ],
    };
  });
  return (
    <Animated.View
      key={index}
      style={[
        {
          height: SQAURE_SIZE,
          aspectRatio: 1,
          backgroundColor: COLORS[index % COLORS.length],
          //   opacity: (index + 1) / N,
          position: "absolute",
        },
        rStyle,
      ]}
    />
  );
};

export default Sqaure;

const styles = StyleSheet.create({});
