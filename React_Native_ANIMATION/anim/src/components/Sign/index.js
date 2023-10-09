import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Header from "./Components/Header";
import Bottom from "./Components/View";

const Main = ({ navigation }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginHorizontal: 16,
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Header />
      <Bottom
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});
