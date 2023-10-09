import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "./src/components/ProfileScreen";
import UpdateProfile from "./src/components/UpdateProfile";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notify from "./src/components/Notify";
import Notification from "./src/components/Notifications";
import NotificationDocuments from "./src/screens/NotificationDocuments";
import ExpenseScreen from "./src/screens/ExpenseScreen";
import AddExpense from "./src/screens/AddExpense";
import ScanDocument from "./src/screens/ScanDocument";
import Signature from "./src/screens/AddSignature";
import LocationScreen from "./src/screens/LocationScreen";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="updateProfile" component={UpdateProfile} />

        <Stack.Screen name="Notify" component={Notify} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen
          name="NotificationDocuments"
          component={NotificationDocuments}
        />

        <Stack.Screen name="Expense" component={ExpenseScreen} />
        <Stack.Screen name="AddExpenseScreen" component={AddExpense} />
        <Stack.Screen name="ScanDocument" component={ScanDocument} />
        <Stack.Screen name="AddSIGN" component={Signature} />

        <Stack.Screen name="Location" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
