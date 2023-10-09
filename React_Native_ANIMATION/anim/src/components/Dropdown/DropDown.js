import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DropdownItems from "./DropdownItems";
import { useSharedValue } from "react-native-reanimated";

const DropDown = () => {
  const data = [
    {
      title: "Header",
      icon: "ios-add-circle",
      icon2: "ios-alarm",
    },
    {
      title: "Basket",
      icon: "ios-basket",
      icon2: "ios-book",
    },
    {
      title: "Checkmark",
      icon: "ios-checkmark-circle",
      icon2: "ios-clipboard",
    },
    {
      title: "Cloud",
      icon: "ios-cloud",
      icon2: "ios-compass",
    },
    {
      title: "Globe",
      icon: "ios-globe",
      icon2: "ios-heart",
    },
    // Add more Ionicons as needed
  ];

  const isExpanded = useSharedValue(false);

  return (
    <View>
      {data.map((item, index) => (
        <DropdownItems
          key={index}
          item={item}
          index={index}
          Maxcoount={data.length}
          isExpanded={isExpanded}
        />
      ))}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
