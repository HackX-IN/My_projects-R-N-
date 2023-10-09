import React, { useEffect, useLayoutEffect, useState } from "react";
import { Alert, ScrollView, TouchableOpacity, View } from "react-native";
import {
  TextInput,
  RadioButton,
  Checkbox,
  Button,
  Text,
} from "react-native-paper";
import { Picker } from "@react-native-picker/picker"; // Import Picker
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";

const FormScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");
  const [hobbySelection, setHobbySelection] = useState({
    reading: false,
    sports: false,
    music: false,
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);

        // Reverse geocoding to get region, country, and state
        const reverseGeocode = await Location.reverseGeocodeAsync(
          currentLocation.coords
        );
        if (reverseGeocode.length > 0) {
          const address = reverseGeocode[0];

          setLocation(address);
          console.log(location?.city);
        }
      }
    })();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Form",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("List")}
          style={{ padding: 8, backgroundColor: "purple", borderRadius: 8 }}
        >
          <Text style={{ color: "white", fontSize: "16" }}>List</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleSubmit = async () => {
    try {
      if (!name || !address || !selectedCountry || !gender) {
        // Validate that required fields are filled
        Alert.alert("Please fill out all required fields.");
        return;
      }

      // Save the form data to storage (AsyncStorage) along with location, region, country, and state
      const formData = {
        id: new Date().getTime(),
        name,
        address,
        gender,
        hobbies: Object.keys(hobbySelection).filter(
          (hobby) => hobbySelection[hobby]
        ),
        country: selectedCountry,
      };
      await saveFormData(formData);

      // Navigate to the ListScreen
      navigation.navigate("List");
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  const saveFormData = async (data) => {
    try {
      // Get existing data from storage
      const existingData = await AsyncStorage.getItem("formData");
      const parsedData = existingData ? JSON.parse(existingData) : [];

      // Add new data
      parsedData.push(data);

      // Save updated data to storage
      await AsyncStorage.setItem("formData", JSON.stringify(parsedData));
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={setAddress}
        mode="outlined"
        multiline
        style={styles.input}
      />
      <Text style={styles.label}>Gender</Text>
      <RadioButton.Group onValueChange={setGender} value={gender}>
        <RadioButton.Item label="Male" value="male" />
        <RadioButton.Item label="Female" value="female" />
      </RadioButton.Group>
      <Text style={styles.label}>Hobbies</Text>
      {/* Checkbox items */}
      <ScrollView
        style={styles.checkboxContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Checkbox.Item
          label="Reading"
          status={hobbySelection.reading ? "checked" : "unchecked"}
          onPress={() =>
            setHobbySelection({
              ...hobbySelection,
              reading: !hobbySelection.reading,
            })
          }
        />
        <Checkbox.Item
          label="Sports"
          status={hobbySelection.sports ? "checked" : "unchecked"}
          onPress={() =>
            setHobbySelection({
              ...hobbySelection,
              sports: !hobbySelection.sports,
            })
          }
        />
        <Checkbox.Item
          label="Music"
          status={hobbySelection.music ? "checked" : "unchecked"}
          onPress={() =>
            setHobbySelection({
              ...hobbySelection,
              music: !hobbySelection.music,
            })
          }
        />
        <Checkbox.Item
          label="Movie"
          status={hobbySelection.Movie ? "checked" : "unchecked"}
          onPress={() =>
            setHobbySelection({
              ...hobbySelection,
              Movie: !hobbySelection.Movie,
            })
          }
        />
      </ScrollView>
      <Text style={styles.label}>Country</Text>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a country" value="" />
        <Picker.Item label="USA" value="usa" />
        <Picker.Item label="Canada" value="canada" />
        <Picker.Item label="United Kingdom" value="uk" />
        <Picker.Item label="Australia" value="australia" />
        <Picker.Item label="Germany" value="germany" />
        <Picker.Item label="India" value="india" />
        {/* Add more countries */}
      </Picker>
      {location && (
        <View
          style={{ flexDirection: "row", padding: 8, alignItems: "center" }}
        >
          <Text style={{ marginRight: 5, fontSize: 18, fontWeight: "bold" }}>
            Location:
          </Text>
          <Text style={{ marginRight: 1, fontSize: 12, fontWeight: "bold" }}>
            {location.city},
          </Text>
          <Text style={{ marginRight: 1, fontSize: 12, fontWeight: "bold" }}>
            {location.region}
          </Text>
        </View>
      )}

      <Button
        mode="contained"
        onPress={() => navigation.navigate("Camera")}
        style={{ marginLeft: 8 }}
      >
        Camera
      </Button>

      {/* Video button */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Video")}
        style={{ marginLeft: 8, marginTop: 8 }}
      >
        Video
      </Button>

      <Button onPress={handleSubmit} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Submit
        </Text>
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: "black",
    paddingVertical: 10,
    fontWeight: "bold",
  },
  checkboxContainer: {
    marginBottom: 10,
    flexDirection: "row",
  },
  picker: {
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    marginTop: 20,
    backgroundColor: "purple",
    padding: 8,
  },
});

export default FormScreen;
