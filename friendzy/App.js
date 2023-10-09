import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./src/Navigations/index";
import { UserContext } from "./UserContext";
import ReprotProblem from "./src/Dreams/Reportproblem";

export default function App() {
  return (
    <>
      <ReprotProblem />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /** <StatusBar style="auto" backgroundColor="#fff" translucent={false} />
   <UserContext>
     <StackNavigator />
   </UserContext> */
}
