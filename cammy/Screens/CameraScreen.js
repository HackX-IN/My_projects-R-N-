import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';

import { SvgUri } from 'react-native-svg';


const emojiCategories = [
  {
    name: 'Face',
    emojis: [
      require('../assets/Winky.png'),
      require('../assets/w1.png'),
      require('../assets/w3.png'),
      require('../assets/g1.png'),
      require('../assets/fire.png'),
     
    ],
    IconName: 'tag-faces',
  },
  {
    name: 'Beard',
    emojis: [
      require('../assets/b2.png'),
      require('../assets/b1.png'),
      require('../assets/b6.png'),
      require('../assets/b4.png'),
      
      
    ],
    IconName: 'line-style',
  },
  {
    name: 'Hair',
    emojis: [
      require("../assets/h1.png"),
      require("../assets/h2.png"),
      require("../assets/h3.png"),
      
    ],
    IconName: 'line-weight',
  },
];

const saveImageToCameraRoll = async (uri) => {
  try {
    await MediaLibrary.saveToLibraryAsync(uri);
    Alert.alert('Success', 'Image saved to camera roll.');
  } catch (error) {
    Alert.alert('Error', 'Failed to save image to camera roll.');
  }
}


const App = ({ navigation }) => {
  const [faceDetected, setFaceDetected] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState(emojiCategories[0].emojis[0]);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);
  const categoryScrollViewRef = useRef(null);

  const faceValues = useSharedValue({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const beardValues = useSharedValue({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const hairValues = useSharedValue({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  function handleFaceDetected({ faces }) {
    const face = faces[0];

    if (face) {
      const { size, origin } = face.bounds;

      faceValues.value = {
        width: size.width,
        height: size.height,
        x: origin.x,
        y: origin.y,
      };

      if (emojiCategories[selectedCategory].name === 'Beard') {
        beardValues.value = {
          width: size.width*-3, 
          height: size.height,
          x: origin.x,
          y: origin.y,
        };
      }
      if (emojiCategories[selectedCategory].name === 'Hair') {
        hairValues.value = {
          width: size.width*4, 
          height: size.height,
          x: origin.x,
          y: origin.y,
        };
      }
  


      setFaceDetected(true);
    } else {
      setFaceDetected(false);
    }
  }

  const animatedFaceStyle = useAnimatedStyle(() => {
    let topValue = 0;
    let emojiWidth = faceValues.value.width;
    let emojiHeight = faceValues.value.height;
  
    if (emojiCategories[selectedCategory].name === 'Beard') {
      topValue = 75;
      emojiWidth = beardValues.value.width;
      emojiHeight = beardValues.value.height;
    } else if (emojiCategories[selectedCategory].name === 'Hair') {
      topValue = -130; // Adjust the top value for hair emojis
      emojiWidth = hairValues.value.width;
      emojiHeight = hairValues.value.height;
    }
  
    return {
      position: 'absolute',
      zIndex: 1,
      top: topValue,
      width: emojiWidth,
      height: emojiHeight,
      transform: [
        {
          translateX: faceValues.value.x,
        },
        {
          translateY: faceValues.value.y,
        },
      ],
    };
  });


  
  const getSupportedRatios = async () => {
    if (Platform.OS === 'android' && cameraRef.current) {
      const ratios = await cameraRef.current.getSupportedRatiosAsync();
      console.log('Supported ratios:', ratios);
    }
  };


  useEffect(() => {
    requestPermission();
    getSupportedRatios();
  }, []);

  if (!permission?.granted) {
    return <View style={{ flex: 1 }} />;
  }

  const handleCategoryChange = (index) => {
    setSelectedCategory(index);
    setSelectedEmoji(emojiCategories[index].emojis[0]);

    categoryScrollViewRef.current.scrollTo({ x: index * 70, y: 0, animated: true });
  };

  const handleEmojiChange = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const toggleCameraType = () => {
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
    );
  };



  const captureImage = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        setCapturedImage(uri);
        saveImageToCameraRoll(uri);
      } catch (error) {
        Alert.alert('Error', 'Failed to capture image.');
      }
    } else {
      Alert.alert('Error', 'Camera reference is null.');
    }
  };
  
  
  
  const handleSaveImage = async () => {
    if (capturedImage) {
      try {
        await MediaLibrary.saveToLibraryAsync(capturedImage);
        Alert.alert('Success', 'Image saved to camera roll.');
      } catch (error) {
        Alert.alert('Error', 'Failed to save image to camera roll.');
      }
    } else {
      Alert.alert('Error', 'No image captured.');
    }
  };
  
 

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        flashMode={Camera.Constants.FlashMode.off}
        type={cameraType}
        onFacesDetected={handleFaceDetected}
        ratio={Platform.OS === 'android' ? '16:9' : '4:3'}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
          runClassifications: FaceDetector.FaceDetectorClassifications.none,
          minDetectionInterval: 100,
          tracking: true,
        }}
        ref={cameraRef}
      >
        {faceDetected && (
          <Animated.View style={animatedFaceStyle}>
            <Image source={selectedEmoji} style={{ width: faceValues.value.width, height: faceValues.value.height }} />
          </Animated.View>
        )}

        <ScrollView
          ref={categoryScrollViewRef}
          horizontal
          style={{ position: 'absolute', top: 670, left: 15 }}
          contentContainerStyle={{ paddingRight: 20 }}
          showsHorizontalScrollIndicator={false}
        >
          {emojiCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCategoryChange(index)}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: selectedCategory === index ? 'white' : 'gray',
                borderRadius: 20,
                marginRight: 15,
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <MaterialIcons name={category.IconName} size={28} color="black" />
              <Text style={{ color: selectedCategory === index ? 'black' : 'white', marginLeft: 5 }}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView
          horizontal
          style={{ position: 'absolute', top: 730, left: 15 }}
          contentContainerStyle={{ paddingRight: 20 }}
          showsHorizontalScrollIndicator={false}
        >
          {emojiCategories[selectedCategory].emojis.map((emoji, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleEmojiChange(emoji)}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: selectedEmoji === emoji ? 'white' : 'transparent',
                borderRadius: 20,
                marginRight: 5,
              }}
            >
              <Image source={emoji} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity
          onPress={toggleCameraType}
          style={{ position: 'absolute', top: 50, right: 20, alignItems: 'center' }}
        >
          <MaterialCommunityIcons
            name="camera-switch-outline"
            size={35}
            color={cameraType === Camera.Constants.Type.back ? 'gray' : 'white'}
          />
        
        </TouchableOpacity>

        <TouchableOpacity
          onPress={captureImage}
          style={{
            position: 'absolute',
            bottom: 135,
            alignSelf: 'center',
            
            borderRadius: 35,
            padding: 10,
          }}
        >
          <MaterialIcons name="camera" size={70} color="white" />
        </TouchableOpacity>

        {capturedImage && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{ position: 'absolute', top: 50, left: 25, backgroundColor: 'gray', borderRadius: 15, padding: 5 }}
            >
              <MaterialIcons name="keyboard-backspace" size={28} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 18 }}>Captured Image:</Text>
            <Image source={{ uri: capturedImage }} style={{ width: '90%', height: 400, marginTop: 20 }} />
          </View>
        )}
      </Camera>
    </View>

    
  );
};

export default App