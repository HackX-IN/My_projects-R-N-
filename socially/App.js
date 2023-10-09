import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React,{useEffect,useState} from "react";
import {firebase} from './config'


import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import HomeScreen from "./screens/HomeScreen";



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddPost from "./screens/AddPost";

const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();


const App=()=>{
  const[initializing,setInitializing]=useState(true)
  const[user,setUser]=useState();

  function onAuthstateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false)
  }

  useEffect(()=>{
    const subscriber=firebase.auth().onAuthStateChanged(onAuthstateChanged);
    return subscriber;
  },[]);

  if(initializing) return null;

  if(!user){
    return (
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={SignupScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    );
  };

  return (
    
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon:({focused,size,color})=>{
        let iconName;
        if(route.name==='Home'){
          iconName='home';
          size= focused? 25 : 20;
          color=focused? '#555' :'#f0f';
        } else if(route.name==='Chat'){
          iconName='comments';
          size= focused ? 25 : 20;
          color=focused? '#555' :'#f0f';
        } else if(route.name==='Profile'){
          iconName='user';
          size= focused ? 25 : 20;
          color=focused? '#555' :'#f0f';
        }
        return(
          <FontAwesome5 name={iconName} size={size} color={color}/>

        )
      }
    })}  >
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarShowLabel:false,headerShown:false,}} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{tabBarShowLabel:false,headerShown:false}} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarShowLabel:false,headerShown:false}} />
    </Tab.Navigator>
  )

}

const Feedstyles=()=>{
  <Stack.Navigator>
    <Stack.Screen name="AddPost" component={AddPost}/>
  </Stack.Navigator>
}
export default ()=>{
  return (
    <NavigationContainer>
      <App/>
      <Feedstyles/>
    </NavigationContainer>
  )
}