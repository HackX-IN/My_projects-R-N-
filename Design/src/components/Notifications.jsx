import {Image, StatusBar, StyleSheet, Text, View,Pressable,ScrollView,TextInput } from "react-native";
import React from "react";
import { APP_CONFIG } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import DataCard from "./DataCard";
import { Dimensions } from "react-native";







const App = ({navigation}) => {
  const { width } = Dimensions.get("window");
  return (
    <ScrollView style={styles.container}>
    <StatusBar
      backgroundColor={APP_CONFIG.APP_THEME.colors.background}
      style="light"
    />
    <View
      style={{
        padding: 10,
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        source={APP_CONFIG.IMAGES.BACK_ICON}
        style={{ width: width * 0.08, height: width * 0.08 }}
      />
     <View style={{flexDirection:"row",alignItems:"center",}}>
    <View style={{backgroundColor:APP_CONFIG.APP_THEME.colors.BackBlur,marginRight:15,height:50,width:50,justifyContent:"center",alignItems:"center",borderRadius:50,}}>
    <Text style={{fontSize:20,fontWeight:"bold",color:APP_CONFIG.APP_THEME.colors.surface,marginRight:-3,textAlign:"center"}}>MS</Text>
    </View>
     <Icon name="bell" size={22} color={APP_CONFIG.APP_THEME.colors.secondary} />
     </View>

     <Pressable onPress={()=>navigation.navigate("Notify")} style={{backgroundColor:APP_CONFIG.APP_THEME.colors.surface,padding:15}}>
     <Text style={{fontSize:width*0.04,fontWeight:"200",color:APP_CONFIG.APP_THEME.colors.secondary,}}>Next</Text>
     </Pressable>
    </View>

    <View style={{marginTop:width*0.014,padding:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
    <Text style={{fontSize:20,fontWeight:"bold",color:APP_CONFIG.APP_THEME.colors.surface}}>NOTIFICATIONS</Text>
    <Text style={{fontSize:20,fontWeight:"400",color:APP_CONFIG.APP_THEME.colors.Icon}}>7 UNREAD</Text>
    
    </View>
    <View style={{marginTop:width*0.010,padding:10,}}>
   <DataCard/>
    </View>


    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_CONFIG.APP_THEME.colors.background,
    padding: 10,
  },
})