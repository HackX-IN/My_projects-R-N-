import { View, Text, StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import { APP_CONFIG } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from 'react-native';
import { Pressable } from 'react-native';





const { width } = Dimensions.get("window");
const NotificationDocuments = ({route,navigation}) => {

    const { item } = route.params;

  return (
    <View style={styles.container}>
    <View
      style={{
        padding: width * 0.04,
        marginTop: width * 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image
        source={APP_CONFIG.IMAGES.BACK_ICON}
        style={{ width: width * 0.08, height: width * 0.08 }}
      />
      </TouchableOpacity>
      <Icon
        name="bell"
        size={width * 0.06}
        color={APP_CONFIG.APP_THEME.colors.surface}
      />
    </View>
    
    <Pressable onPress={()=>navigation.navigate("Expense")} style={{backgroundColor:APP_CONFIG.APP_THEME.colors.surface,padding:15}}>
    <Text style={{fontSize:width*0.04,fontWeight:"200",color:APP_CONFIG.APP_THEME.colors.secondary,}}>Next</Text>
    </Pressable>
    <View
      style={{
        padding: width * 0.08,
        marginTop: width * 0.08,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontSize: width * 0.06,
          color: APP_CONFIG.APP_THEME.colors.surface,
          textTransform: "uppercase",
        }}
      >
        Notifications
      </Text>
      <Text style={styles.text}>7 UNREAD</Text>
    </View>

    <View
    style={{
      padding: width * 0.08,
      marginTop: -width * 0.1,
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <Text
      style={{
        fontSize: width * 0.05,
        color: APP_CONFIG.APP_THEME.colors.surface,
        textTransform: "uppercase",
      }}
    >
      TRIP DETAILS
    </Text>
    <Text style={{fontSize:width * 0.038,color:APP_CONFIG.APP_THEME.colors.surface}}>
     {item.name}
    </Text>
  </View>
    

  <View style={{marginTop:-width * 0.08,padding:width*0.08}}>
  <Icon name="print" size={width*0.1} style={{marginTop:width*0.04,alignItems:"center"}} color={APP_CONFIG.APP_THEME.colors.surface}/>
  <Text style={{marginTop:-width*0.06,textAlign:"center",color:APP_CONFIG.APP_THEME.colors.secondary,fontSize:width*0.054}}>{item.name}</Text>
  
  </View>

  <View style={{height:width*0.8,marginTop:width*0.08,width:width*0.8,backgroundColor:APP_CONFIG.APP_THEME.colors.surface,borderRadius:width*0.02,marginLeft:width*0.06}}>

 <Text style={{textAlign:"center",marginTop:50,fontSize:22}}>PDF VIEWER</Text>
  
  </View>


    </View>

  )
}

export default NotificationDocuments

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: APP_CONFIG.APP_THEME.colors.background,
      padding: width * 0.01,
      flexDirection: "column",
    },
    text: {
      color: APP_CONFIG.APP_THEME.colors.Icon,
      fontSize: width * 0.032,
    },
  });
  