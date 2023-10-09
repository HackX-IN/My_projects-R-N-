import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { APP_CONFIG } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import DataCard from "../components/DataCard";
import { Dimensions } from "react-native";
import ExpenseCard from "../components/ExpenseCard";

const AddExpense = ({ navigation }) => {
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

        <Icon
          name="search"
          size={22}
          color={APP_CONFIG.APP_THEME.colors.surface}
        />
        <Pressable onPress={()=>navigation.navigate("ScanDocument")} style={{backgroundColor:APP_CONFIG.APP_THEME.colors.surface,padding:15}}>
        <Text style={{fontSize:width*0.04,fontWeight:"200",color:APP_CONFIG.APP_THEME.colors.secondary,}}>Next</Text>
        </Pressable>
      </View>

      <View
        style={{
          marginTop: width * 0.014,
          padding: width * 0.04,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "400",
            color: APP_CONFIG.APP_THEME.colors.surface,
          }}
        >
          EXPENSE
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: width * 0.01,
            fontWeight: "400",
            color: APP_CONFIG.APP_THEME.colors.primary,
          }}
        >
        Tap on the trip to add expense
        </Text>
      </View>
      <View style={{ marginTop: width * 0.01, padding: 10 }}>
      
        <ExpenseCard navigation={navigation} />
      
      </View>
     
    </ScrollView>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_CONFIG.APP_THEME.colors.background,
    padding: 10,
  },
});
