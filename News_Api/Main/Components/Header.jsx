import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View className=" px-3 py-4 ml-4 flex-row justify-between">
      <Text className="text-2xl font-bold text-black">DailyHunt</Text>
      <Ionicons name="md-notifications-circle-outline" size={28} color="black" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})