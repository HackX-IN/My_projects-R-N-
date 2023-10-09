import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { products } from '../products'
import ProductCrad from './ProductCrad'

export const ProductList = () => { 
  return (
    <FlatList data={products} keyExtractor={(products)=>products.id} 
    renderItem={({item})=><ProductCrad {...item}/>}
  />  
  )
}