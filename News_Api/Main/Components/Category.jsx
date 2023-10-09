import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const Category = ({selectCategory}) => {
  const [active,setActive]=useState(1);
  const onCategoryClick=(id)=>{
    setActive(id);
    console.log(id);
  }
  const categoryList=[
    {
      id:1,
      name:'latest',
    },
    {
      id:2,
      name:'world',
    },
    {
      id:3,
      name:'business',
    },
    {
      id:4,
      name:'sport',
    },
    {
      id:5,
      name:'bitcoin',
    },
    {
      id:6,
      name:'movie',
    },
    
    

  ]
  return (
    <View className="mb-3 px-2">
    <FlatList 
      data={categoryList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <TouchableOpacity className="px-3 py-2" onPress={()=>{onCategoryClick(item.id);
        selectCategory(item.name)}} >
        <Text style={{color:active===item.id ? 'white' : 'black'}} className="text-black text-xl font-bold">{item.name}</Text>


        </TouchableOpacity>
      )}
    />
     
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})