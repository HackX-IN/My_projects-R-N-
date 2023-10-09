import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import LastTransaction from "../../components/LastTransaction";
const index = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(26,135,221,0.3)", "rgba(52,145,219,1)"]}
        style={styles.header}
      />
      <View style={styles.Title}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            marginTop: 20,
          }}
        >
          <Text style={styles.Text}>Dashboard</Text>

          <Image
            source={{
              uri: "https://freepngimg.com/thumb/power_rangers/9-2-power-rangers-picture-thumb.png",
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              resizeMode: "cover",
            }}
          />
        </View>
        <View style={{ padding: 20, marginTop: 10 }}>
          <Text style={styles.Text1}>Hi! Amanda</Text>
          <Text style={styles.Text}>Total Balance</Text>
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: -25,
          }}
        >
          <Text style={styles.Text2}>$ 124.57</Text>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 55,
              backgroundColor: "yellow",
              position: "absolute",
              right: 24,
              bottom: 42,
            }}
          />
          <MaterialIcons name="notifications-none" size={28} color="white" />
        </View>
      </View>

      <View style={styles.btn}>
        <TouchableOpacity
          style={{
            width: "45%",
            backgroundColor: "#F8bb18",
            padding: 15,
            borderRadius: 10,
            flexDirection: "row",
            gap: 5,
          }}
        >
          <AntDesign name="caretup" size={24} color="black" />
          <Text style={styles.btnText}>Send Money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "45%",
            backgroundColor: "#1a87dd",
            padding: 15,
            borderRadius: 10,
            flexDirection: "row",
            gap: 5,
          }}
        >
          <AntDesign name="caretdown" size={24} color="white" />
          <Text style={styles.btnText2}>Request Money</Text>
        </TouchableOpacity>
      </View>
      <LastTransaction />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 300,
    width: "100%",
  },
  Title: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
  },
  Text: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  Text1: {
    fontSize: 16,
    color: "#FFf2ee",
    fontWeight: "500",
    marginBottom: 8,
  },
  Text2: {
    fontSize: 28,
    color: "#FFf2ee",
    fontWeight: "bold",
  },
  btn: {
    width: "100%",
    padding: 20,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  btnText2: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    marginBottom: -15,
  },
});
