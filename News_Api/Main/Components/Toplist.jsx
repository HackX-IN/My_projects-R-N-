import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Toplist = ({newsList}) => {
  const navigation=useNavigation()
  return (
    <View className="px-2 py-2">

    <FlatList
        data={newsList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
            <TouchableOpacity className="mt-2 flex-row mb-2" onPress={()=>navigation.navigate("Read",{news:item})}>
                <Image source={{uri: item.urlToImage}} className="rounded-xl" style={{width:130,height:130}} />

                <View style={{marginRight:130,marginLeft:10}}>
               
                <Text numberOfLines={3} className="text-lg font-semibold">{item.title}</Text>
                <Text className="text-sm text-gray-400 font-semibold mt-1 ">{item?.source?.name}</Text>
                
            </View>
           
            </TouchableOpacity>
        
       
        )}
    />
    
    </View>
  )
}

export default Toplist

const styles = StyleSheet.create({})