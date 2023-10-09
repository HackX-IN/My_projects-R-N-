import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const EditForm = ({ item, onUpdate }) => {
  const [name, setName] = useState(item.name);
  const [address, setAddress] = useState(item.address);
  const [gender, setGender] = useState(item.gender);
  const [hobbies, setHobbies] = useState(item.hobbies.join(", "));
  const [country, setCountry] = useState(item.country);

  const handleUpdate = () => {
    const updatedItem = {
      ...item,
      name,
      address,
      gender,
      hobbies: hobbies.split(",").map((hobby) => hobby.trim()),
      country,
    };

    onUpdate(updatedItem);
  };

  return (
    <>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TextInput
        label="Gender"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
      <TextInput
        label="Hobbies"
        value={hobbies}
        onChangeText={(text) => setHobbies(text)}
      />
      <TextInput
        label="Country"
        value={country}
        onChangeText={(text) => setCountry(text)}
      />
      <Button mode="contained" onPress={handleUpdate}>
        Update
      </Button>
    </>
  );
};

export default EditForm;
