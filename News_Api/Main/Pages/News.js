import { Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';


const News = () => {

  const navigation=useNavigation()

  const news=useRoute().params.news

  useEffect(() => {
   console.log(news)
  }, [])

  const shareObj=()=>{
   Share.share({
    message:`${news.title} \n ${news.url}`
   
   })
  }
  
  return (
    <ScrollView style={{flex:1}} className="bg-gray-400">  
      <SafeAreaView >
     <View className="mb-3 ml-3 flex-row items-center justify-between">
     <TouchableOpacity onPress={()=>navigation.goBack()}>
     <AntDesign name="back" size={24} color="white" />
     </TouchableOpacity>
    <TouchableOpacity onPress={()=>shareObj()}>
    <EvilIcons name="share-apple" size={28} color="blue" />
    </TouchableOpacity>
     </View>

     <Image source={{uri:news.urlToImage}} style={{width:"100%",height:300,borderRadius:10}}/>
     <Text style={{fontSize:15,margin:10}} className="px-2 py-2 font-bold text-yellow-300">{news.source.name}</Text>
     <Text style={{fontSize:20,margin:10}} className="font-semibold " >{news.title}</Text>
    
     <Text style={{fontSize:18,margin:10}} className="text-2xl font-semibold text-white">{news.description}</Text>
     <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
      <Text style={{fontSize:18,margin:10}} className="text-2xl font-semibold text-blue-500">Read More...</Text>
     </TouchableOpacity>
    </SafeAreaView>
    </ScrollView>

  )
}

export default News

const styles = StyleSheet.create({})