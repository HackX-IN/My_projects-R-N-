import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../theme/index";
import { AntDesign } from "@expo/vector-icons";

const DayCard = () => {
  return (
    <View className="mb-2 space-y-3 mt-4">
      <View className="flex-row items-center mx-5 space-x-2">
        <AntDesign name="calendar" size={24} color="white" />
        <Text className="text-white text-base">Daily Forecast</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15,marginTop:5 }}>
        <View
          className="flex justify-center items-center rounded-3xl py-3 space-y-2 space-x-3 p-3 mr-3 ml-2"
          style={{ backgroundColor: theme.bgWhite(0.15) }}>
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="w-11 h-11"
          />
          <Text className="text-white ">Monday</Text>
          <Text className="text-white text-xl font-semibold">25°C</Text>
        </View>
        <View
          className="flex justify-center items-center rounded-3xl py-3 space-y-2 space-x-3 p-3 mr-3 ml-2"
          style={{ backgroundColor: theme.bgWhite(0.15) }}>
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="w-11 h-11"
          />
          <Text className="text-white text-center ">Tuesday</Text>
          <Text className="text-white text-xl font-semibold">25°C</Text>
        </View>
        <View
          className="flex justify-center items-center rounded-3xl py-3 space-y-2 space-x-3 p-3 mr-3 ml-2"
          style={{ backgroundColor: theme.bgWhite(0.15) }}>
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="w-11 h-11"
          />
          <Text className="text-white ">Monday</Text>
          <Text className="text-white text-xl font-semibold">25°C</Text>
        </View>
        <View
          className="flex justify-center items-center rounded-3xl py-3 space-y-2 space-x-3 p-3 mr-3 ml-2"
          style={{ backgroundColor: theme.bgWhite(0.15) }}>
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="w-11 h-11"
          />
          <Text className="text-white ">Monday</Text>
          <Text className="text-white text-xl font-semibold">25°C</Text>
        </View>
        <View
          className="flex justify-center items-center rounded-3xl py-3 space-y-2 space-x-3 p-3 mr-3 ml-2"
          style={{ backgroundColor: theme.bgWhite(0.15) }}>
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="w-11 h-11"
          />
          <Text className="text-white ">Monday</Text>
          <Text className="text-white text-xl font-semibold">25°C</Text>
        </View>
        <View
          className="flex justify-center items-center rounded-3xl py-3 space-y-2 space-x-3 p-3 mr-3 ml-2"
          style={{ backgroundColor: theme.bgWhite(0.15) }}>
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="w-11 h-11"
          />
          <Text className="text-white ">Monday</Text>
          <Text className="text-white text-xl font-semibold">25°C</Text>
        </View>
        <View
          className="flex justify-center items-center rounded-3xl py-3 space-y-2 space-x-3 p-3 mr-3 ml-2"
          style={{ backgroundColor: theme.bgWhite(0.15) }}>
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="w-11 h-11"
          />
          <Text className="text-white ">Monday</Text>
          <Text className="text-white text-xl font-semibold">25°C</Text>
        </View>
      
        
      </ScrollView>
    </View>
  );
};

export default DayCard;

const styles = StyleSheet.create({});
