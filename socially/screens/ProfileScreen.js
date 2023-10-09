import { SafeAreaView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import {firebase} from '../config'


const ProfileScreen = () => {

  const[name,setName]=useState('');

  useEffect(()=>{
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
      if(snapshot.exists){
        setName(snapshot.data())
      }
      else{
        console.log('User Does Not Exist')

      }
    })
  },[])
  return (
    <SafeAreaView style={styles.container}>
    <View>
<Text style={{fontSize:20,fontWeight:'bold'}} >
  Hello,{name.firstName}
</Text>
<TouchableOpacity onPress={()=>firebase.auth().signOut()} style={{borderWidth:1,borderColor:'#000',alignItems:'center',backgroundColor:'purple'}}>
  <Text style={{fontSize:20,fontWeight:'bold'}}>
    LogOut
  </Text>
</TouchableOpacity>
</View>

</SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
})