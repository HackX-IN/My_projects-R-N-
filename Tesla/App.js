// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen'
import Controls from './Screens/Controls'
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

function App() {

  return (
    
    <NavigationContainer>
    <StatusBar backgroundColor='light'/>
      <Stack.Navigator ScreenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}  />
       
        <Stack.Screen name="Controls" component={Controls} options={{headerShown:false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default App;