import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Buttons = ({ name, icon }) => {
  return (
    <TouchableOpacity style={styles.Buttons}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name={icon} size={24} color="black" />
        <Text style={{ marginLeft: 8, fontSize: 14, fontWeight: "500" }}>
          {name}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  Buttons: {
    width: "90%",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f3f4f5",
    borderRadius: 15,
    flexDirection: "row",
  },
});
