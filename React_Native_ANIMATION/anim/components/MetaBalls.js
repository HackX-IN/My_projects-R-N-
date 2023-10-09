import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useMemo } from "react";
import {
  Blur,
  Canvas,
  Circle,
  ColorMatrix,
  Group,
  Paint,
  SweepGradient,
  runSpring,
  useValue,
  vec,
} from "@shopify/react-native-skia";
import Touchable, { useGestureHandler } from "react-native-skia-gesture";

const RADIUS = 80;
const App = () => {
  const { width, height } = useWindowDimensions();
  const cx = useValue(width / 2);
  const cy = useValue(height / 2);

  const gestureHandler = useGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = cx.current;
      ctx.y = cy.current;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      cx.current = translationX + ctx.x;
      cy.current = translationY + ctx.y;
    },
    onEnd: () => {
      runSpring(cx, width / 2), runSpring(cy, height / 2);
    },
  });

  const layer = useMemo(() => {
    return (
      <Paint>
        <Blur blur={30} />
        <ColorMatrix
          matrix={[
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 60, -30,
          ]}
        />
      </Paint>
    );
  }, []);

  return (
    <Touchable.Canvas style={{ flex: 1, backgroundColor: "#111" }}>
      <Group layer={layer}>
        <Touchable.Circle {...gestureHandler} cx={cx} cy={cy} r={RADIUS} />
        <Circle cx={width / 2} cy={height / 2} r={RADIUS} />
        <SweepGradient c={vec(0, 0)} colors={["cyan", "magneta", "cyan"]} />
      </Group>
    </Touchable.Canvas>
  );
};

export default App;

const styles = StyleSheet.create({});
