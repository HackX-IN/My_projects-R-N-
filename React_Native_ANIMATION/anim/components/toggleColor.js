import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";

import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [theme, setTheme] = React.useState("light");
  const TrackColor = {
    true: "#999",
    false: "#000",
  };

  const progess = useDerivedValue(() => {
    return theme === "dark" ? withTiming(1) : withTiming(0);
  }, [theme]);

  const rstyle = useAnimatedStyle(() => {
    const bgColor = interpolateColor(progess.value, [0, 1], ["#fff", "#000"]);
    return {
      backgroundColor: bgColor,
    };
  });

  return (
    <Animated.View
      style={[
        { flex: 1, justifyContent: "center", alignItems: "center" },
        rstyle,
      ]}
    >
      <StatusBar
        backgroundColor={theme === "dark" ? "#000" : "#000"}
        style="light"
      />
      <Switch
        trackColor={TrackColor}
        thumbColor={"violet"}
        value={theme === "dark"}
        onValueChange={(toggled) => setTheme(toggled ? "dark" : "light")}
      />
    </Animated.View>
  );
};

export default App;

const styles = StyleSheet.create({});
