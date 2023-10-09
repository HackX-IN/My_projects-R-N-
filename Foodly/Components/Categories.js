import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { categories } from "../constants/index";
import * as Animatable from "react-native-animatable";

const Categories = () => {
  const [isactive, setIsactive] = useState(false);
  return (
    <ScrollView
      className=" px-2 mt-4 py-3 mr-2"
      horizontal
      showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => {
        let Isactive = category == isactive;
        let Textclass = Isactive ? "Font-bold text-white" : "text-white";
        return (
          <Animatable.View
          delay={index*120}
          animation="fadeInUp"
          duration={500}
          key={index}>
          
          <TouchableOpacity
            key={index}
            className="flex items-center justify-center mr-4"
            onPress={() => setIsactive(category)}>
            <Text className={"text-2xl ml-3 font-semibold" + Textclass}>
              {category}
            </Text>
            {
                Isactive?(
                    <View className=" flex-row items-center justify-center">
                    <Image source={require("../assets/images/line.png")} className=" h-4 w-5 "/>

                    </View>
                ):null
            
            }
          </TouchableOpacity>
          </Animatable.View>
        );
      })}
    </ScrollView>
  );
};

export default Categories;
