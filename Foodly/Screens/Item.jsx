import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";


const Item = (props) => {
  let item = props.route.params;
  const navigation=useNavigation()

  return (
    <View className="flex-1 bg-white">
      <Image
        source={require("../assets/images/background.png")}
        blurRadius={40}
        style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        className="h-96 w-full absolute"
      />
      <SafeAreaView>
        <View className="flex-row justify-between items-center ml-3 mr-3 ">
          <TouchableOpacity className="bg-white p-3 rounded-full" onPress={()=>navigation.goBack()}>
            <AntDesign name="left" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-3 rounded-full">
            <MaterialIcons name="favorite-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center ">
          <Image className="h-48 w-48 " source={item.image} />
          <Text className="text-2xl text-center mt-8 text-white">
            {item.name}
          </Text>
        </View>
        <View className="flex-row justify-center items-center mt-63">
          <View className="flex-row justify-between bg-gray-100 rounded-2xl space-x-3">
            <TouchableOpacity className=" rounded-2xl bg-white border-2 border-gray-200 p-3">
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-2xl text-center mt-2">1</Text>
            <TouchableOpacity className=" rounded-2xl bg-white border-2 border-gray-200 p-3">
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between items-center mx-4 h-20 overflow-hidden">
          <Animatable.View
            delay={180}
            animation="slideInDown"
            className="flex item-center space-y-2">
            <Image
              source={require("../assets/icons/calories.png")}
              className="h-6 w-6 "
            />
            <Text className=" font-semibold">130 Cal</Text>
          </Animatable.View>
          <Animatable.View
            delay={280}
            animation="slideInDown"
            className="flex item-center space-y-2">
            <Image
              source={require("../assets/icons/clock.png")}
              className="h-6 w-6 "
            />
            <Text className=" font-semibold">15-20 min</Text>
          </Animatable.View>
          <Animatable.View
            delay={380}
            animation="slideInDown"
            className="flex item-center space-y-2">
            <Image
              source={require("../assets/icons/chat.png")}
              className="h-6 w-6 "
            />
            <Text className=" font-semibold">4.6 vote</Text>
          </Animatable.View>
          <Animatable.View
            delay={480}
            animation="slideInDown"
            className="flex item-center space-y-2">
            <Image
              source={require("../assets/icons/weight.png")}
              className="h-6 w-6 "
            />
            <Text className=" font-semibold">350 g</Text>
          </Animatable.View>
        </View>
        <View className=" space-y-3 h-60  mx-4 mt-6">
          <Animatable.Text
            animation="slideInUp"
            className="text-2xl text-gray-800 font-semibold">
            Description
          </Animatable.Text>
          <Animatable.Text
            animation="slideInUp"
            className="text-gray-600 tracking-wider">
            {item.desc}
          </Animatable.Text>
        </View>

        <View className="mx-4 flex-row justify-between items-center -my-4">
          <Animatable.Text
            delay={100}
            animation="slideInLeft"
            className="text-3xl text-gray-800 font-semibold">
            ₹ {item.price}
          </Animatable.Text>
          <Animatable.View animation="slideInRight" delay={100} >
            <TouchableOpacity className=" bg-gray-800 p-4 px-11 rounded-2xl flex-row justify-between" >
              <Text className="text-2xl text-white font-semibold ">
                Add to Cart
              </Text>
             
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Item;
