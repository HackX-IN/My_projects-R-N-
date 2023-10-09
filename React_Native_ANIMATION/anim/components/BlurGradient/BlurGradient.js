import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  useSharedValueEffect,
  useValue,
  vec,
} from "@shopify/react-native-skia";
import {
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const CANVAS_PAD = 40;
const BlurGradient = ({ height, width }) => {
  const rValue = useSharedValue(0);
  const skValue = useValue(0);

  useEffect(() => {
    rValue.value = withRepeat(withTiming(10, { duration: 2000 }), -1, true);
  }, [rValue]);

  useSharedValueEffect(() => {
    skValue.current = rValue.value;
  }, rValue);
  return (
    <Canvas style={{ width: width + CANVAS_PAD, height: height + CANVAS_PAD }}>
      <RoundedRect
        x={CANVAS_PAD / 2}
        y={CANVAS_PAD / 2}
        width={width}
        height={height}
        r={20}
        color="white"
      >
        <SweepGradient
          c={vec(width / 2, height / 2)}
          colors={["cyan", "magenta", "yellow", "cyan"]}
        />
        <BlurMask blur={skValue} style="solid" />
      </RoundedRect>
    </Canvas>
  );
};

export default BlurGradient;

const styles = StyleSheet.create({});
