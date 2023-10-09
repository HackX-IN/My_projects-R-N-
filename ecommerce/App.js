import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import {ProductList} from './Components/ProductList';

export default function App() {
  const {colorScheme,toggleColorScheme}=useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-gray-900">
    <View className="flex-row items-center w-full gap-5 justify-center">
    <Text className=" dark:text-white font-bold text-2xl text-red-600">Ecommerce</Text>
    <Switch value={colorScheme==='dark'} onChange={toggleColorScheme} />
    
      </View>
      <ProductList/>
      <StatusBar style={colorScheme==='dark'?'light':'dark'} />
    </SafeAreaView>
  );
}

