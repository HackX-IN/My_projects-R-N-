// In App.js in a new project

import * as React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Main/Pages/Home'
import News from './Main/Pages/News'



const Stack = createNativeStackNavigator();

function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Read" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
    
   
  )
}

export default App;