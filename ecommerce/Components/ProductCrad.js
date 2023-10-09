import { View, Text,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {AntDesign} from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'

const ProductCrad = ({
    image,
    category,
    title,
    price,
    description
}) => {
    const [count,setCount]=useState(1);
    const{colorScheme,toggleColorScheme}=useColorScheme();
  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
    <View className="bg-white rounded-xl">
        <Image source={{uri:image}} className="w-full h-72" style={{resizeMode:"contain"}}/>
    </View>
    <View className="mt-5">
    <Text className="text-sm text-blue-60 dark:text-white/70">{category}</Text>

    <Text className="text-lg font-bold text-gray-900 dark:text-white/70">{title}</Text>
    <View className="flex-row items-center justify-between my-3 ">
    <View className="flex-row items-center gap-2">
        <AntDesign 
            name='minuscircleo'
            size={24
            }
            color={colorScheme==="light"?"black":"white"}
            onPress={()=>setCount(count-1)}
                
        />
        <Text>{count}</Text>
        <AntDesign 
            name='pluscircleo'
            size={24
            }
            color={colorScheme==="light"?"black":"white"}
            onPress={()=>setCount(count+1)}
                
        />
    </View>
    <Text className="text-2xl font-bold text-gray-900 dark:text-white/70">	
${price *count}</Text>
    </View>
    <Text className="text-gray-900 dark:text-white/70">{description}</Text>

    </View>

    </View>
  )
}

export default ProductCrad