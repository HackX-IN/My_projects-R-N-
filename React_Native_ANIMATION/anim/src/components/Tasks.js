import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const Tasks = ({ text }) => {
  const TransalteX = useSharedValue(0);

  const GestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      TransalteX.value = event.translationX;
    },
    onEnd: (event) => {
      TransalteX.value = withTiming(0);
    },
  });

  const rstyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: TransalteX.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={GestureEvent}>
      <Animated.View style={[styles.card, rstyle]}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {text}
        </Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 20,
    borderRadius: 25,
    backgroundColor: "#fff",
    marginVertical: 15,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
