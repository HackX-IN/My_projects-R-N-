import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Color from "color";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const IMG_SIZE = width * 0.95;
const Dropheight = 80;
const Margin = 10;

const DropdownItems = ({ item, index, Maxcoount, isExpanded }) => {
  const FulldropDownHeight = Maxcoount * (Dropheight + Margin);

  const CollapasedTop = FulldropDownHeight / 2 - Dropheight;
  const ExpandedTop = (Dropheight + Margin) * index;
  const isHeader = index === 0;
  const ExpandedScale = 1;
  const CollapsedScale = 1 - index * 0.08;

  const ExpandedColor = "#1b1b1b";
  const CollapsedColor = Color(ExpandedColor)
    .lighten(index * 0.25)
    .hex();

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isExpanded.value ? ExpandedColor : CollapsedColor
      ),
      top: withSpring(isExpanded.value ? ExpandedTop : CollapasedTop),
      transform: [
        {
          scale: withSpring(isExpanded.value ? ExpandedScale : CollapsedScale),
        },
        {
          translateY: FulldropDownHeight / 2,
        },
      ],
    };
  });

  const rOpacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isHeader ? 1 : isExpanded.value ? 1 : 0),
    };
  });

  return (
    <Animated.View
      onTouchEnd={() => {
        if (isHeader) isExpanded.value = !isExpanded.value;
      }}
      style={[
        {
          position: "absolute",
          height: Dropheight,
          width: IMG_SIZE,
          backgroundColor: "#fff",
          marginBottom: 12,
          borderRadius: 12,
          zIndex: Maxcoount - index,
        },
        rStyle,
      ]}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.View
          style={[
            {
              position: "absolute",
              backgroundColor: "#111",
              aspectRatio: 1,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              width: 45,
            },
            { left: 15 },
            rOpacity,
          ]}
        >
          <Ionicons name={item.icon} size={25} color="#d4d4d4" />
        </Animated.View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "600",
            color: "#d4d4d4",
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          {item.title}
        </Text>
        <View
          style={[
            {
              position: "absolute",
              backgroundColor: "#111",
              aspectRatio: 1,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              width: 45,
            },
            { right: 15, backgroundColor: "transparent" },
          ]}
        >
          <Ionicons name={item.icon2} size={25} color="#d4d4d4" />
        </View>
      </View>
    </Animated.View>
  );
};

export default DropdownItems;

const styles = StyleSheet.create({});
