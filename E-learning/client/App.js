import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import FormScreen from "./FormList";
import ListScreen from "./ListScreen";
import CameraScreen from "./CameraScreen";
import VideoScreen from "./VideoScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Form">
          <Stack.Screen name="Form" component={FormScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Video" component={VideoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
