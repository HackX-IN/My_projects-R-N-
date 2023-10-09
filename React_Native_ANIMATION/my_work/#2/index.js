import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { useSharedValue } from "react-native-reanimated";
import Page from "./components/Page";

const WORDS = ["What's", "up", "mobile", "devs?"];
const Scroll = () => {
  const translateX = useSharedValue(0);
  const scrollHandler = (event) => {
    translateX.value = event.nativeEvent.contentOffset.x;
  };
  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      pagingEnabled
      scrollEventThrottle={16}
      horizontal
      style={styles.container}
    >
      {WORDS.map((item, index) => (
        <Page
          item={item}
          index={index}
          key={index.toString()}
          translateX={translateX}
        />
      ))}
    </Animated.ScrollView>
  );
};

export default Scroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
