import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToCameraScreen = () => {
    navigation.navigate('Camera');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Camera App Home</Text>
      <TouchableOpacity
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: 'lightgray',
          borderRadius: 5,
        }}
        onPress={goToCameraScreen}
      >
        <Text style={{ fontSize: 18 }}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
