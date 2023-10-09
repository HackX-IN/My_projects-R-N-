import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import Categories from "../Components/Categories";
import Popular from "../Components/Popular";
import { ScrollView } from "react-native";
import { foodItems } from "../constants";

const Home = () => {
  return (
    <LinearGradient colors={["#001747", "#00567b"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 50 }} />
        <View className="flex-row items-center justify-between px-3 py-2">
          <FontAwesome5 name="grip-lines" size={28} color="white" />
          <Ionicons name="md-person-circle-sharp" size={50} color="white" />
        </View>
        <View style={{ width: 300 }} className="px-3 py-4 mr-4">
          <Text className="text-3xl text-white font-bold"> Find and Order</Text>
          <Text className="text-3xl text-white font-bold"> Food For You</Text>
        </View>
        <View
          className="flex-row items-center justify-between px-3 py-2 mt-4 bg-white  rounded-2xl"
          style={{ width: 330, marginLeft: 10 }}>
          <Ionicons
            name="md-search-outline"
            size={24}
            color="black"
            className="-mt-2 mr-2"
          />
          <TextInput
            placeholder="Search"
            style={{ width: 1950 }}
            className="text-black font-bold px-2 py-2 items-center mb-1"
          />
        </View>
        <Categories />
        <Text className="text-3xl text-white font-bold mt-4 mx-4">Popular</Text>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {foodItems.map((item, index) => (
            <Popular item={item} index={index} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({});
