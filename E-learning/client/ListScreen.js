import React, { useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native"; // Import Alert from react-native
import { List, Button, Dialog, Portal, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditForm from "./EditForm";

const ListItem = React.memo(({ item, onDelete, onEdit }) => (
  <>
    <List.Item title={`Name: ${item.name}`} />
    <List.Item title={`Address: ${item.address}`} />
    <List.Item title={`Gender: ${item.gender}`} />
    <List.Item title={`Hobbies: ${item.hobbies.join(", ")}`} />
    <List.Item title={`Country: ${item.country}`} />
    <Button
      mode="contained"
      onPress={() => onDelete(item.id)}
      style={{ marginBottom: 5 }}
    >
      Delete
    </Button>
    <Button
      mode="contained"
      onPress={() => onEdit(item.id)}
      style={{ marginBottom: 8 }}
    >
      Edit
    </Button>
    <View style={{ borderBottomColor: "black", borderBottomWidth: 1 }} />
    {/* Add an edit button */}
  </>
));

const ListScreen = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const deleteItem = (itemId) => {
    const newData = data.filter((item) => item.id !== itemId);
    setData(newData);
    // Save the updated data to AsyncStorage
    AsyncStorage.setItem("formData", JSON.stringify(newData))
      .then(() => {
        console.log("Item deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  const editItem = (itemId) => {
    const selectedItem = data.find((item) => item.id === itemId);
    setSelectedItem(selectedItem);
    setVisible(true);
  };

  const updateItem = (updatedItem) => {
    const newData = data.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setData(newData);

    AsyncStorage.setItem("formData", JSON.stringify(newData))
      .then(() => {
        console.log("Item updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });

    setSelectedItem(null);
    setVisible(false);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const existingData = await AsyncStorage.getItem("formData");
        if (existingData) {
          setData(JSON.parse(existingData));
        }
      } catch (error) {
        console.error("Error loading form data:", error);
      }
    };

    loadData();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem item={item} onDelete={deleteItem} onEdit={editItem} />
        )}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Edit Item</Dialog.Title>
          <Dialog.Content>
            {selectedItem && (
              <EditForm item={selectedItem} onUpdate={updateItem} />
            )}
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

export default ListScreen;
