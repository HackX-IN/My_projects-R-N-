import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
// import { ScrollView } from "react-native"
import Tasks from "../src/components/Tasks";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const tasks = ["Task 1", "Task 2", "Task 3"];
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <ScrollView style={{ marginTop: 50 }}>
          {tasks.map((task) => (
            <Tasks key={task} text={task} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
