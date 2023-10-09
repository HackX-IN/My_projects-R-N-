import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "@/components/Themed";
import Transaction from "../../components/Transactions";

export default function TabTwoScreen() {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active button

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transaction</Text>
        <View style={styles.searchIcon}>
          <Ionicons name="search-outline" size={22} color="#1a87dd" />
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={{
            padding: 20,
            width: "45%",
            backgroundColor: activeIndex === 0 ? "#1a87dd" : "#f3f4f5",
            alignItems: "center",
            borderRadius: 20,
            marginLeft: 35,
          }}
          onPress={() => setActiveIndex(0)}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: activeIndex === 0 ? "#fff" : "#000",
            }}
          >
            Incomes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 20,
            width: "40%",
            backgroundColor: activeIndex === 1 ? "#f8bb18" : "#f3f4f5",
            alignItems: "center",
            borderRadius: 20,
            marginRight: 30,
          }}
          onPress={() => setActiveIndex(1)}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: activeIndex === 1 ? "#fff" : "#000",
            }}
          >
            Expenses
          </Text>
        </TouchableOpacity>
      </View>
      <Transaction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 40,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, // Allow the title to take all available space
    marginLeft: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
