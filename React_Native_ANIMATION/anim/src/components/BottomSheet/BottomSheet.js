import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useCallback, useEffect, useImperativeHandle } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { listFontFamilies } from "@shopify/react-native-skia";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSALTE_Y = -SCREEN_HEIGHT + 50;
const BottomSheet = React.forwardRef(({ children }, ref) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const active = useSharedValue(listFontFamilies);
  const ScrollTo = (destination) => {
    "worklet";
    active.value = destination !== 0;
    translateY.value = withSpring(destination, { damping: 50 });
  };
  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ ScrollTo, isActive }), [
    ScrollTo,
    isActive,
  ]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSALTE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        ScrollTo(0);
      }
      if (translateY.value < -SCREEN_HEIGHT / 2) {
        ScrollTo(MAX_TRANSALTE_Y);
      }
    });

  useEffect(() => {
    ScrollTo(-SCREEN_HEIGHT / 3);
  }, []);

  const rstyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSALTE_Y + 50, MAX_TRANSALTE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateY: translateY.value }],
      borderRadius,
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.Bottom, rstyle]}>
        <View style={styles.line} />
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  Bottom: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#111",
    alignSelf: "center",
    marginVertical: 15,
  },
});
