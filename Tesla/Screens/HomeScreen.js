import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import { Image } from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
   EvilIcons  
} from '@expo/vector-icons';
import { FlatList } from "react-native";
import { tesla_car_app } from "../Utils/Carlist";


const HomeScreen = ({navigation}) => {

  const [lock,setLock]=useState()
  
  return (
    <SafeAreaView className="bg-black flex-1 ">
      <View className="flex-row justify-between items-center px-2 py-2 mt-3 ">
        <Text className=" text-white text-2xl px-2 font-bold ">My Model S</Text>
        <Ionicons name="person-circle" size={28} color="white" />
      </View>
    <View className="flex-row ml-4 -mt-1 ">
    <Ionicons name="battery-full" size={26} color="gray" />
    <Text className="text-gray-500 text-xl ml-2 mt-0.5 text-center font-bold">317 mi</Text>
    </View>
    <Text className="text-gray-400 ml-4">Parked</Text>

    <View className="mt-5 justify-center items-center">
      <Image source={require("../assets/images/car1.png")} className="w-80 h-80" style={{resizeMode:"contain"}} />
    </View>
    <View className=" flex-row justify-around items-center mt-5 -ml-2">
  <TouchableOpacity onPress={()=>setLock(!lock)} className="-mr-3">
    {
      lock?(<Entypo name="lock" size={24} color="gray" />):(<FontAwesome5 name="unlock" size={24} color="green" />)
    }
    
    
  </TouchableOpacity>
  <MaterialCommunityIcons name="fan" size={26} color="gray" />
  <FontAwesome5 name="bolt" size={26} color="gray" />
  <Ionicons name="car-sport-sharp" size={26} color="gray" />
</View>

<FlatList
className="mt-3 ml-3" 
  data={tesla_car_app}
  renderItem={({item}) => (
    <TouchableOpacity className="flex-row justify-around py-4 px-2" onPress={()=>navigation.navigate("Controls")}>
    <MaterialCommunityIcons
      name={item.iconName}
      size={24}
      color="gray"
      className="ml-2 mr-2"
    />
    <Text className="text-gray-400 text-2xl font-bold ml-3">{item.Feature}</Text>
    <MaterialCommunityIcons
        name="arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: 'auto' }}
      />

    </TouchableOpacity>
  )}
/>


    </SafeAreaView>
  );
};

export default HomeScreen;
