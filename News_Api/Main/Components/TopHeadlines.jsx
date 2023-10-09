import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Api/GlobalAPI'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const TopHeadlines = ({newsList}) => {
  
    const navigation=useNavigation()
  return (
    <View>
    <FlatList
    data={newsList}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity style={{width:Dimensions.get('screen').width*0.80}} className="px-2" 
            onPress={()=>navigation.navigate("Read",{news:item})}>
                <Image source={{uri:item?.urlToImage}} style={{height:Dimensions.get('screen').width*0.77,}} className=" rounded-xl"/>
                <Text numberOfLines={3} style={{marginTop:10,fontSize:23,fontWeight:"600"}}>{item.title}</Text>
                <Text style={{fontSize:15,fontWeight:"500"}} className="py-2 text-gray-500">{item?.source?.name}</Text>
            </TouchableOpacity>
        )}
    />
    
    </View>
  )
}

export default TopHeadlines

const styles = StyleSheet.create({})