import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Wave from "./src/components/Wave";
import { withTiming } from "react-native-reanimated";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        withTiming(setCount(count + 1));
      } else {
        withTiming(setCount(0));
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <View style={styles.container}>
      <Wave size={250} progress={count} count={count} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
