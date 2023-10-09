import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Login = () => {
  const navigation=useNavigation()
  return (
    <LinearGradient colors={["#001747", "#00567b"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginRight: 6,
            padding: 5,
          }}>
          The Fatest Food Delivery Service
        </Text>
        <View style={{ height: 20 }} />
     <View className="flex-row" style={{ justifyContent: "center",marginTop:10,padding:5 }}>
      <Image source={require("../assets/images/Login.png")} style={{width:215,height:200,resizeMode:"contain"}}/>
     </View>
     <View className=" mt-5 py-5 flex justify-center items-center ">
      <Text className="text-lg text-white px-2 text-center ml-3 capitalize">Home Delivery and Online Reservation system for restuarants and cafe</Text>
     </View>
     <View className="flex-col justify-center items-center mt-5 mb-5 px-7 " >
      <TouchableOpacity className="bg-orange-500 py-3 px-7 rounded-lg shadow-md mt-4" style={{width:300}} onPress={()=>navigation.navigate("Home")}>
        <Text className="text-lg text-white text-center">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className=" py-3 px-5 rounded-lg shadow-md mt-5 " style={{width:300,borderColor:"orange",borderWidth:0.77}} onPress={()=>navigation.navigate("Home")}>
        <Text className="text-lg text-white text-center">Sign up</Text>
      </TouchableOpacity>
     </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
