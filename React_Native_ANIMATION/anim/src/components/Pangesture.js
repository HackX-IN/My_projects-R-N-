import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const Height = 100.0;
const CircleSize = 350.0;
const Pangesture = () => {
  const TransalteX = useSharedValue(0);
  const TransalteY = useSharedValue(0);

  const PanGetureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.translateX = TransalteX.value;
      ctx.translateY = TransalteY.value;
    },
    onActive: (event, ctx) => {
      console.log(event.translationX);
      TransalteX.value = event.translationX + ctx.translateX;
      TransalteY.value = event.translationY + ctx.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(TransalteX.value ** 2 + TransalteY.value ** 2);
      if (distance < CircleSize + 25 / 2) {
        TransalteX.value = withSpring(0);
        TransalteY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: TransalteX.value },
        { translateY: TransalteY.value },
      ],
    };
  });

  return (
    <View style={styles.Circle}>
      <PanGestureHandler onGestureEvent={PanGetureEvent}>
        <Animated.View style={[styles.square, rStyle]} />
      </PanGestureHandler>
    </View>
  );
};

export default Pangesture;

const styles = StyleSheet.create({
  square: {
    height: Height,
    width: Height,
    borderRadius: 16,
    backgroundColor: "rgb(0, 0, 255)",
  },
  Circle: {
    height: CircleSize,
    width: CircleSize,
    borderRadius: CircleSize / 2,
    borderColor: "rgb(0,0,255,0.6)",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
