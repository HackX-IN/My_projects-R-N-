import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { APP_CONFIG } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import { Pressable } from "react-native";
import Ic from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");
const AddSignature = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
    
      <Pressable onPress={()=>navigation.navigate("Location")} style={{backgroundColor:APP_CONFIG.APP_THEME.colors.surface,padding:15}}>
      <Text style={{fontSize:width*0.04,fontWeight:"200",color:APP_CONFIG.APP_THEME.colors.secondary,}}>Next</Text>
      </Pressable>
   

      <View style={{ marginTop: -width * 0.08, padding: width * 0.08,justifyContent:"flex-end",alignItems:"flex-end" }}>
        <Icon
          name="print"
          size={width * 0.1}
          style={{ marginTop: width * 0.04, alignItems: "flex-end" }}
          color={APP_CONFIG.APP_THEME.colors.surface}
        />
        
      </View>

      <View
        style={{
          height: width * 1.1,
          marginTop: width * 0.08,
          width: width * 0.85,
          backgroundColor: APP_CONFIG.APP_THEME.colors.surface,
          borderRadius: width * 0.02,
          marginLeft: width * 0.06,
        }}
      >
        <Text style={{ textAlign:"flex-start", marginTop: 50, fontSize: 22 }}>
       RECIEPT
        </Text>
        <Text style={{ textAlign:"flex-start", marginTop: 10, fontSize: 22 }}>
       Bill to: XYZ Company
         </Text>
         <Text style={{ textAlign:"flex-start", marginTop: 10, fontSize: 22 }}>
         $40.232
           </Text>

      </View>

      <Pressable
      onPress={navigation.navigate("AddSIGN")}
        style={{
          marginTop:width*0.08,
          marginBottom: width * 0.01,
          backgroundColor: APP_CONFIG.APP_THEME.colors.primary,
          padding: width * 0.04,
          borderRadius: width * 0.02,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "400",
            color: APP_CONFIG.APP_THEME.colors.secondary,
          }}
        >
          Scan Documents
        </Text>
      </Pressable>
      <View
        style={{
          zIndex: 1,
          position: "absolute",
          top: width * 1.90,
          left: width * 0.75,
          bottom: width * 0.1,
          width: width * 0.15,
          height: width * 0.15,
          borderRadius: width * 0.075,
          backgroundColor: APP_CONFIG.APP_THEME.colors.secondary,
        }}
      >
        <Ic
          name="comment"
          size={width * 0.07}
          color={APP_CONFIG.APP_THEME.colors.onBackground}
          style={{ marginLeft: width * 0.04, marginTop: width * 0.05 ,alignItems:"center"}}
        />
      </View>
    </View>
  );
};

export default AddSignature;

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
