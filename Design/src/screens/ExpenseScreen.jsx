import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { APP_CONFIG } from "../constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Pressable } from "react-native";
import { Dimensions } from "react-native";
import Ic from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");
const ExpenseScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: height * 0.05, // Use height value for margin top
        }}
      >
        <Icon
          name="tune"
          size={width * 0.08} // Use width value for icon size
          color={APP_CONFIG.APP_THEME.colors.surface}
        />
        <Icon
          name="search"
          size={width * 0.08} // Use width value for icon size
          color={APP_CONFIG.APP_THEME.colors.surface}
        />
        <Pressable onPress={()=>navigation.navigate("AddExpenseScreen")} style={{backgroundColor:APP_CONFIG.APP_THEME.colors.surface,padding:15}}>
        <Text style={{fontSize:width*0.04,fontWeight:"200",color:APP_CONFIG.APP_THEME.colors.secondary,}}>Next</Text>
        </Pressable>
      </View>
     
      

      <View
        style={{
          height: height * 0.55, // Use height value for height
          padding: width * 0.04, // Use width value for padding
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon
          name="note"
          size={width * 0.25} // Use width value for icon size
          color={APP_CONFIG.APP_THEME.colors.primary}
        />
        <Text
          style={{
            fontSize: width * 0.06, // Use width value for font size
            fontWeight: "600",
            color: APP_CONFIG.APP_THEME.colors.secondary,
            marginTop: height * 0.02, // Use height value for margin top
          }}
        >
          NO EXPENSE ADDED
        </Text>
        <Text
          style={{
            fontSize: width * 0.03, // Use width value for font size
            textAlign: "center",
            fontWeight: "600",
            color: APP_CONFIG.APP_THEME.colors.surface,
          }}
        >
          You have not added any expense to your trips
        </Text>
        <Text
          style={{
            fontSize: width * 0.03, // Use width value for font size
            fontWeight: "600",
            color: APP_CONFIG.APP_THEME.colors.surface,
          }}
        >
          Tap the button below to add.
        </Text>
      </View>
      <View>
        <Pressable
        onPress={()=>navigation.navigate("AddExpenseScreen")}
          style={{
            backgroundColor: APP_CONFIG.APP_THEME.colors.secondary,
            padding: width * 0.06, // Use width value for padding
            borderRadius: width * 0.1, // Use width value for border radius
            marginTop: height * 0.02, // Use height value for margin top
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: width * 0.06, // Use width value for font size
              fontWeight: "600",
              color: APP_CONFIG.APP_THEME.colors.background,
              marginTop: height * 0.01, // Use height value for margin top
              textAlign: "center",
            }}
          >
            ADD NEW EXPENSE
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          zIndex: 1,
          position: "absolute",
          left: width * 0.7,
          bottom: height * 0.1,
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
          style={{ marginLeft: width * 0.04, marginTop: height * 0.02 }}
        />
      </View>
    </View>
  );
};

export default ExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_CONFIG.APP_THEME.colors.background,
    padding: width * 0.02, // Use width value for padding
    flexDirection: "column",
  },
  text: {
    color: APP_CONFIG.APP_THEME.colors.Icon,
  },
});
