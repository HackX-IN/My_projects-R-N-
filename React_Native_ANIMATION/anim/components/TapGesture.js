import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

const Image_SIZE = 500.0;
const App = () => {
  const AnimatedImage = Animated.createAnimatedComponent(Image);

  const scale = useSharedValue(0);

  const rstyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: Math.max(scale.value, 0),
        },
      ],
    };
  });

  const DoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  return (
    <GestureHandlerRootView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TapGestureHandler numberOfTaps={2} onActivated={DoubleTap}>
        <Animated.View>
          <ImageBackground
            style={styles.image}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLST-ugtuunKE9Gah_yRs0jmF5mkC8mT2gzpYePK4vpw&s",
            }}
          >
            <AnimatedImage
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/833/833472.png",
              }}
              style={[styles.image, { resizeMode: "center" }, rstyle]}
            />
          </ImageBackground>
        </Animated.View>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  image: {
    height: Image_SIZE,
    width: Image_SIZE,
  },
});
