// Import necessary dependencies and components
import {ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { APP_CONFIG } from "../constants";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Pressable } from "react-native";



const ProfileScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={APP_CONFIG.APP_THEME.colors.background} style="light" />

      <View style={{ padding: 10, marginTop: windowHeight * 0.04, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Image source={APP_CONFIG.IMAGES.BACK_ICON} style={{ width: windowWidth * 0.08, height: windowWidth * 0.08 }} />
        <Icon name="bell" size={windowWidth * 0.055} color={APP_CONFIG.APP_THEME.colors.surface} />
      </View>

      <View style={{ padding: 10, marginTop: windowHeight * 0.01 }}>
        <Text style={{ fontSize: windowWidth * 0.06, fontWeight: "400", color: APP_CONFIG.APP_THEME.colors.onSurfaceVariant }}>PROFILE</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: windowHeight * 0.015, padding: windowWidth * 0.04, alignItems: "center" }}>
          <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" }} style={{ width: windowWidth * 0.2, height: windowWidth * 0.2, borderRadius: windowWidth * 0.1 }} />
          <Text style={{ padding: 2, fontSize: windowWidth * 0.08, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary, textDecorationLine: "underline", textDecorationStyle: "dotted", textDecorationColor: APP_CONFIG.APP_THEME.colors.secondary }}>EDIT PROFILE</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: windowHeight * 0.015, padding: windowWidth * 0.04, alignItems: "center" }}>
          <Text style={{ marginLeft: windowWidth * 0.02, fontSize: windowWidth * 0.04, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary }}>Full name</Text>
          <Text style={{ marginRight: windowWidth * 0.06, fontSize: windowWidth * 0.04, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary }}>Email Address</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -windowHeight * 0.02, padding: windowWidth * 0.06, alignItems: "center" }}>
          <Text style={{ marginLeft: windowWidth * 0.02, fontSize: windowWidth * 0.05, fontWeight: "300", color: APP_CONFIG.APP_THEME.colors.surface }}>Driver One</Text>
          <Text style={{ marginRight: -windowWidth * 0.018, fontSize: windowWidth * 0.05, fontWeight: "300", color: APP_CONFIG.APP_THEME.colors.surface }}>drive1@example.com</Text>
        </View>

        {/* Phone number */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: windowHeight * 0.015, padding: windowWidth * 0.06, alignItems: "center" }}>
          <Text style={{ marginLeft: windowWidth * 0.02, fontSize: windowWidth * 0.04, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary }}>Phone number</Text>
          <Text style={{ marginRight: windowWidth * 0.08, fontSize: windowWidth * 0.04, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary }}>Driver ID</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -windowHeight * 0.02, padding: windowWidth * 0.06, alignItems: "center" }}>
          <Text style={{ marginLeft: windowWidth * 0.02, fontSize: windowWidth * 0.05, fontWeight: "400", color: APP_CONFIG.APP_THEME.colors.surface }}>415-757-9519</Text>
          <Text style={{ marginRight: windowWidth * 0.004, fontSize: windowWidth * 0.05, fontWeight: "300", color: APP_CONFIG.APP_THEME.colors.surface }}>SO-0000023987</Text>
        </View>

        {/* License */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: windowHeight * 0.015, padding: windowWidth * 0.06, alignItems: "center" }}>
          <Text style={{ marginLeft: windowWidth * 0.02, fontSize: windowWidth * 0.04, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary }}>License #</Text>
          <Text style={{ marginRight: windowWidth * 0.05, fontSize: windowWidth * 0.04, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary }}>License EXPIRY</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -windowHeight * 0.02, padding: windowWidth * 0.06, alignItems: "center" }}>
          <Text style={{ marginLeft: windowWidth * 0.02, fontSize: windowWidth * 0.05, fontWeight: "400", color: APP_CONFIG.APP_THEME.colors.surface }}>XYZ02983230</Text>
          <Text style={{ marginRight: windowWidth * 0.05, fontSize: windowWidth * 0.05, fontWeight: "300", color: APP_CONFIG.APP_THEME.colors.surface }}>Aug 14th, 2025</Text>
        </View>

        {/* Default Truck */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: windowHeight * 0.015, padding: windowWidth * 0.06, alignItems: "center" }}>
          <Text style={{ marginLeft: windowWidth * 0.02, fontSize: windowWidth * 0.04, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary }}>Default Truck</Text>
          <Text style={{ marginRight: windowWidth * 0.05, fontSize: windowWidth * 0.04, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary }}>Truck License#</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -windowHeight * 0.02, padding: windowWidth * 0.06, alignItems: "center" }}>
          <Text style={{ marginLeft: windowWidth * 0.02, fontSize: windowWidth * 0.05, fontWeight: "300", color: APP_CONFIG.APP_THEME.colors.surface }}>TRUCK - 1</Text>
          <Text style={{ marginRight: windowWidth * 0.05, fontSize: windowWidth * 0.05, fontWeight: "300", color: APP_CONFIG.APP_THEME.colors.surface }}>ABC 123</Text>
        </View>
        
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: windowHeight * 0.015, padding: windowWidth * 0.06, alignItems: "center" }}>
        <Text style={{ marginLeft: windowWidth * 0.02, fontSize: windowWidth * 0.04, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary }}>Default Trailer</Text>
        <Text style={{ marginRight: windowWidth * 0.05, fontSize: windowWidth * 0.04, fontWeight: "200", color: APP_CONFIG.APP_THEME.colors.secondary }}>Trailer License #</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -windowHeight * 0.02, padding: windowWidth * 0.06, alignItems: "center" }}>
        <Text style={{ marginLeft: windowWidth * 0.02, fontSize: windowWidth * 0.05, fontWeight: "300", color: APP_CONFIG.APP_THEME.colors.surface }}>Trailer 123</Text>
        <Text style={{ marginRight: windowWidth * 0.05, fontSize: windowWidth * 0.05, fontWeight: "300", color: APP_CONFIG.APP_THEME.colors.surface }}>CA097521FG</Text>
      </View>
      </View>

    
     <View style={{padding:windowWidth*0.04,marginTop:windowHeight*0.04,justifyContent:"flex-end",flexDirection:"column",alignItems:"flex-end",marginRight:windowHeight*0.04}}>
     <Text style={{fontSize:windowWidth*0.04,fontWeight:"200",color:APP_CONFIG.APP_THEME.colors.secondary,}}>Last updated On</Text>
     <Text style={{fontSize:windowWidth*0.05,fontWeight:"200",color:APP_CONFIG.APP_THEME.colors.surface,}}>Aug 19th 2021</Text>
     </View>
    
     <Pressable onPress={()=>navigation.navigate("updateProfile")} style={{backgroundColor:APP_CONFIG.APP_THEME.colors.surface,padding:windowWidth*0.04,marginTop:windowHeight*0.04,justifyContent:"center",alignItems:"center",borderRadius:windowWidth*0.04}}>
     <Text style={{fontSize:windowWidth*0.04,fontWeight:"200",color:APP_CONFIG.APP_THEME.colors.secondary,}}>Next</Text>
     </Pressable>
      
      
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_CONFIG.APP_THEME.colors.background,
    paddingTop: StatusBar.currentHeight,
  },
});

export default ProfileScreen;
