import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Category from '../Components/Category' 
import TopHeadlines from '../Components/TopHeadlines'
import Toplist from '../Components/Toplist'
import GlobalAPI from '../Api/GlobalAPI'
import { LogBox } from 'react-native'



const Home = () => {

  const [newslist,setNewsList]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(() => {
      // getHeadlines()

      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
      getNewsbyCategory("latest")
   
  }, [])
  

  // const getHeadlines=async()=>{
  //     const result = (await GlobalAPI.getTopHeadlines).data
  //     console.log(result) 
  //     setNewsList(result.articles)
  // }

  const getNewsbyCategory=async(category)=>{
    setLoading(true)
    const result = (await GlobalAPI.getbyCategory(category)).data
    console.log(result) 
    setNewsList(result.articles)
    setLoading(false)
}


  return (
    
   
    <SafeAreaView className="bg-gray-400">
    <Header/>
    <Category selectCategory={(category)=>getNewsbyCategory(category)}/>
    {loading?<ActivityIndicator size={'large'} color={'white'}/>:
    
    <View className="bg-gray-400" >
    <TopHeadlines newsList={newslist}/>
    <Toplist newsList={newslist}/>
    </View>
    }
    </SafeAreaView>
    
   
    

  )
}

export default Home

const styles = StyleSheet.create({})