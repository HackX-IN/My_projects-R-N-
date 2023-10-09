import {Image, StatusBar, StyleSheet, Text, View, Pressable, ScrollView, TextInput, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { APP_CONFIG } from "../constants";

import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const UpdateProfile = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor={APP_CONFIG.APP_THEME.colors.background}
        style="light"
      />
      <View
        style={{
          padding: width * 0.03,
          marginTop: width * 0.06,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={APP_CONFIG.IMAGES.BACK_ICON}
          style={{ width: width * 0.08, height: width * 0.08 }}
        />
        <Icon name="bell" size={width * 0.045} color={APP_CONFIG.APP_THEME.colors.primaryContainer} />
      </View>

      <View style={{ padding: width * 0.03, marginTop: width * 0.007 }}>
        <View
          style={{
            flexDirection: "row",
            padding: width * 0.03,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png",
            }}
            style={{ width: width * 0.2, height: width * 0.2, borderRadius: width * 0.25 }}
          />
          <Text
            style={{
              padding: width * 0.005,
              fontSize: width * 0.06,
              fontWeight: "200",
              color: APP_CONFIG.APP_THEME.colors.secondary,
              textDecorationLine: "underline",
              textDecorationStyle: "dotted",
              textDecorationColor: APP_CONFIG.APP_THEME.colors.secondary,
            }}
          >
            UPLOAD PHOTO
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: width * 0.06,
          marginTop: width * 0.013,
          backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur,
          borderRadius: width * 0.02,
        }}
      >
        <Text
          style={{
            color: APP_CONFIG.APP_THEME.colors.TextCustom,
            fontSize: width * 0.035,
            fontWeight: "800",
            marginTop: -width * 0.01,
          }}
        >
          Full Name
        </Text>
        <TextInput
          placeholder="Driver One"
          style={{
            fontSize: width * 0.04,
            color: "white",
            fontWeight: "bold",
            marginTop: width * 0.018,
          }}
        />
      </View>
      <View
        style={{
          padding: width * 0.045,
          marginTop: width * 0.013,
          backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur,
          borderRadius: width * 0.02,
        }}
      >
        <Text
          style={{
            color: "#383426",
            fontSize: width * 0.035,
            fontWeight: "800",
            marginTop: -width * 0.01,
          }}
        >
          EMAIL
        </Text>
        <TextInput
          placeholder="driver1@example.com"
          style={{
            fontSize: width * 0.04,
            color: APP_CONFIG.APP_THEME.colors.surface,
            fontWeight: "bold",
            marginTop: width * 0.018,
          }}
        />
      </View>
      <View
        style={{
          marginTop: width * 0.013,
          borderRadius: width * 0.02,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur, padding: width * 0.06, borderRadius: width * 0.03, width: width * 0.44 }}>
          <Text style={{ color: APP_CONFIG.APP_THEME.colors.error, fontSize: width * 0.035, fontWeight: "600" }}>Phone</Text>
          <TextInput placeholder="+977 9876543210" style={{ fontSize: width * 0.04, color: "white", fontWeight: "bold", marginTop: width * 0.018 }} />
        </View>
        <View style={{ backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur, padding: width * 0.06, borderRadius: width * 0.03, marginLeft: -width * 0.015, width: width * 0.41 }}>
          <Text style={{ color: APP_CONFIG.APP_THEME.colors.error, fontSize: width * 0.035, fontWeight: "600" }}>DRIVER ID #</Text>
          <TextInput placeholder="1567" style={{ fontSize: width * 0.04, color: "white", fontWeight: "bold", marginTop: width * 0.018 }} />
        </View>
      </View>
      <View
        style={{
          marginTop: width * 0.013,
          borderRadius: width * 0.02,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur, padding: width * 0.06, borderRadius: width * 0.03, width: width * 0.44 }}>
          <Text style={{ color: APP_CONFIG.APP_THEME.colors.TextCustom, fontSize: width * 0.035, fontWeight: "600" }}>License EXIPIRY#</Text>
          <TextInput placeholder="09/14/2025" style={{ fontSize: width * 0.04, color: "white", fontWeight: "bold", marginTop: width * 0.018 }} />
        </View>
        <View style={{ backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur, padding: width * 0.06, borderRadius: width * 0.03, marginLeft: -width * 0.015, width: width * 0.41 }}>
          <Text style={{ color: APP_CONFIG.APP_THEME.colors.TextCustom, fontSize: width * 0.035, fontWeight: "600" }}>DRIVER License #</Text>
          <TextInput placeholder="E961567" style={{ fontSize: width * 0.04, color: "white", fontWeight: "bold", marginTop: width * 0.018 }} />
        </View>
      </View>
      <View
        style={{
          marginTop: width * 0.013,
          borderRadius: width * 0.02,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur, padding: width * 0.06, borderRadius: width * 0.03, width: width * 0.44 }}>
          <Text style={{ color: APP_CONFIG.APP_THEME.colors.TextCustom, fontSize: width * 0.035, fontWeight: "400" }}>Default Truck</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput placeholder="+97321" type="number" style={{ fontSize: width * 0.04, color: APP_CONFIG.APP_THEME.colors.TextCustom, fontWeight: "bold", marginTop: width * 0.018 }} />
            <Icon name="chevron-down" size={18} color={APP_CONFIG.APP_THEME.colors.secondary} style={{ marginLeft: width * 0.12,padding:width*0.005  }} />
          </View>
        </View>
        <View style={{ backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur, padding: width * 0.06, borderRadius: width * 0.03, marginLeft: -width * 0.015, width: width * 0.41 }}>
          <Text style={{ color: APP_CONFIG.APP_THEME.colors.TextCustom, fontSize: width * 0.035, fontWeight: "300" }}>Truck License #</Text>
          <TextInput placeholder="1567" style={{ fontSize: width * 0.04, color: "white", fontWeight: "bold", marginTop: width * 0.018 }} />
        </View>
      </View>
      <View
        style={{
          marginTop: width * 0.013,
          borderRadius: width * 0.02,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur, padding: width * 0.06, borderRadius: width * 0.03, width: width * 0.44 }}>
          <Text style={{ color: APP_CONFIG.APP_THEME.colors.TextCustom, fontSize: width * 0.035, fontWeight: "600" }}>Default Trailer</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput placeholder="Trailer" style={{ fontSize: width * 0.04, color: APP_CONFIG.APP_THEME.colors.TextCustom, fontWeight: "bold", marginTop: width * 0.018 }} />
            <Icon name="chevron-down" size={18} color={APP_CONFIG.APP_THEME.colors.secondary} style={{ marginLeft: width * 0.13,padding:width*0.005  }} />
          </View>
        </View>
        <View style={{ backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur, padding: width * 0.06, borderRadius: width * 0.03, marginLeft: -width * 0.015, width: width * 0.41 }}>
          <Text style={{ color: APP_CONFIG.APP_THEME.colors.TextCustom, fontSize: width * 0.035, fontWeight: "600" }}>Trailer License #</Text>
          <TextInput placeholder="MH02 AB 9090" style={{ fontSize: width * 0.04, color: APP_CONFIG.APP_THEME.colors.TextCustom, fontWeight: "bold", marginTop: width * 0.018 }} />
        </View>
      </View>
      <View style={{ marginBottom: width * 0.027, marginTop: width * 0.013, backgroundColor: APP_CONFIG.APP_THEME.colors.onBackground, padding: width * 0.04, borderRadius: width * 0.02 }}>
        <Icon name="warning" size={width * 0.048} color={APP_CONFIG.APP_THEME.colors.error} style={{}} />
        <View style={{ marginLeft: width * 0.085, marginTop: width * 0.02,flexDirection:"column" }}> 
        <Text style={{ color: APP_CONFIG.APP_THEME.colors.TextCustom, fontSize: width * 0.028, fontWeight: "600", marginLeft: width * 0.020, marginTop: -width * 0.072,marginBottom:width*0.036 }}>You Have Not Added Phone Details</Text>
        <Text style={{ color: APP_CONFIG.APP_THEME.colors.secondary, fontSize: width * 0.028, fontWeight: "600", marginLeft: width * 0.020, marginTop: -width * 0.010 }}>Please Add it here..</Text>
        </View>
      </View>
      <Pressable style={{ backgroundColor: APP_CONFIG.APP_THEME.colors.secondary, padding: width * 0.045, borderRadius: width * 0.050, marginTop: width * 0.045 }}>
        <Text style={{ color: APP_CONFIG.APP_THEME.colors.onSecondary, fontSize: width * 0.045, fontWeight: "700", alignSelf: "center" }}>Update Profile</Text>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate("Notification")} style={{backgroundColor:APP_CONFIG.APP_THEME.colors.surface,padding:width*0.04,marginTop:width*0.04,justifyContent:"center",alignItems:"center",borderRadius:width*0.04}}>
      <Text style={{fontSize:width*0.04,fontWeight:"200",color:APP_CONFIG.APP_THEME.colors.secondary,}}>Next</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_CONFIG.APP_THEME.colors.background,
  },
});

export default UpdateProfile;
