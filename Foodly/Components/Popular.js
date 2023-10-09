import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const Popular = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <Animatable.View
      delay={index * 120}
      animation="slideInRight"
      className="w-52 h-70 my-5 mr-6 p-3 py-5 rounded-3xl"
      style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
      <Text></Text>
      <View className="flex-row justify-center">
        <Image source={item.image} className="h-32 w-32" />
      </View>
      <View className="flex px-3 py-2 space-y-2">
        <Text className="text-lg font-semibold">{item.name}</Text>
        <Text className="text-sm text-white">{item.ingredients}</Text>
      </View>
      <View className="flex-row justify-between item-center px-1">
        <Text className="text-2xl font-semibold text-white mt-3">
          {item.price}
        </Text>
        <TouchableOpacity
          className="bg-white w-10 h-10 rounded-full items-center justify-center"
          onPress={() => navigation.navigate("Item", { ...item })}>
          <FontAwesome name="shopping-bag" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};
export default Popular;
