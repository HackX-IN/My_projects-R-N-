import React, { useState, useRef } from "react";
import { Camera } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CameraApp = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);

  const [capturing, setCapturing] = useState(false);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const handleCapture = async () => {
    if (cameraRef.current) {
      setCapturing(true);
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri); // Handle the captured photo data as needed
      setCapturing(false);
    }
  };

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, capturing && styles.disabledButton]}
            onPress={handleCapture}
            disabled={capturing}
          >
            <Text style={styles.text}>Capture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 16,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 8,
  },
});

export default CameraApp;
