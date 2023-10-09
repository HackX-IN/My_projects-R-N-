import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
  withRepeat,
} from "react-native-reanimated";
import { View, Button } from "react-native";
import { useEffect } from "react";

export default function AnimatedStyleUpdateExample(props) {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(2);
  const SIZE = 100;

  const HandleRoatation = (progress) => {
    "worklet";
    return `${progress.value * 2 * Math.PI}rad`;
  };

  const style = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      borderRadius: (opacity.value * SIZE) / 2,
      transform: [{ scale: scale.value }, { rotate: HandleRoatation(opacity) }],
    };
  }, []);
  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.5), 3, true);
    scale.value = withRepeat(withSpring(1), 3, true);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Animated.View
        style={[
          {
            width: SIZE,
            height: SIZE,
            backgroundColor: "green",
          },
          style,
        ]}
      />
    </View>
  );
}
