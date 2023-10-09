import { View, Text,SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const Controls = ({navigation}) => {
  const[on,setOn]=useState()
  const[temp,setTemp]=useState(68)

  let active=on? 'text-green-200':'text-white'
  return (
<SafeAreaView className="flex-1 bg-black">
<TouchableOpacity onPress={()=>navigation.goBack()} className="ml-4 bg-gray-700 w-9 items-center rounded-xl " >
<Ionicons name="arrow-back" size={28} color="white" />
</TouchableOpacity>
<View className="flex mt-5 justify-center items-center">

  <Image source={require('../assets/images/Top.png')} resizeMode="contain" style={{  width: '100%',
    height: '65%',}}/>
</View>

<View  className=" justify-center items-center mt-20">
<Text className="text-white text-2xl font-bold mb-7">Interior 74°F - Exterior 66°F</Text>
</View>
<View style={styles.controlsRow}>
          <TouchableOpacity onPress={()=>setOn(!on)} style={styles.iconButtonContainer}>
            <MaterialCommunityIcons name="power" size={42} color={on ? 'green' : 'gray'} />
            <Text style={styles.iconButtonText} className={active}>{on ? 'On' : 'Off'}</Text>
          </TouchableOpacity>

          <View style={styles.temperatureContainer}>
           <TouchableOpacity onPress={()=>setTemp(temp-1)} >
           <Entypo name="chevron-left" size={30} color="gray" />
           </TouchableOpacity>
            <Text style={styles.temperatureText}>{temp}°</Text>
          <TouchableOpacity onPress={()=>setTemp(temp+1)}>
          <Entypo name="chevron-right" size={30} color="gray" />
          </TouchableOpacity>
          </View>

          <View style={styles.iconButtonContainer} className="">
            <MaterialCommunityIcons name="car-door" size={42} color="gray" />
            <Text style={styles.iconButtonText} className="text-white">Vent</Text>
          </View>
          </View>



</SafeAreaView>

    
  )
}

export default Controls

const styles = StyleSheet.create({
  controlsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
  iconButtonContainer: {
    alignItems: 'center',
  },
  iconButtonText: {
    
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
})