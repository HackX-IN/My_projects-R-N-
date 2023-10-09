import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";

import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { Button_Width } from "./src/constants/Index";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const App = () => {
  const TranslateX = useSharedValue(0);
  const TranslateY = useSharedValue(0);
  const [count, setCount] = useState(0);
  const MAX_SLIDE_OFFSET = Button_Width * 0.3;
  const clamp = (value, min, max) => {
    "worklet";
    return Math.min(Math.max(value, min), max);
  };

  const incrementCount = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);

  const decrementCount = useCallback(() => {
    setCount((currentCount) => currentCount - 1);
  }, []);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  const GestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      TranslateX.value = clamp(
        event.translationX,
        -MAX_SLIDE_OFFSET,
        MAX_SLIDE_OFFSET
      );

      TranslateY.value = clamp(event.translationY, 0, MAX_SLIDE_OFFSET);
    },
    onEnd: (event) => {
      if (TranslateY.value === MAX_SLIDE_OFFSET) {
        runOnJS(resetCount)();
      }
      if (TranslateX.value === MAX_SLIDE_OFFSET) {
        runOnJS(incrementCount)();
      }
      if (TranslateX.value === -MAX_SLIDE_OFFSET) {
        runOnJS(decrementCount)();
      }

      TranslateX.value = withSpring(0);
      TranslateY.value = withSpring(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: TranslateX.value },
        { translateY: TranslateY.value },
      ],
    };
  });
  const rButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: TranslateX.value * 0.1,
        },
        { translateY: TranslateY.value * 0.1 },
      ],
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={[styles.container]}>
        <View style={styles.button}>
          <AntDesign color={"#d4d4d4"} size={22} name="minus" />
          <AntDesign color={"#d4d4d4"} size={22} name="close" />
          <AntDesign color={"#d4d4d4"} size={22} name="plus" />
        </View>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <PanGestureHandler onGestureEvent={GestureEvent}>
            <Animated.View style={[styles.circle, rStyle]}>
              <Text style={{ fontSize: 20, color: "#fff" }}>{count}</Text>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d478",
  },
  button: {
    height: 70,
    width: Button_Width,
    backgroundColor: "#786dec",
    borderRadius: 50,
    position: "absolute",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
