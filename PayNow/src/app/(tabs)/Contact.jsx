import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  Alert,
  ScrollView,
} from "react-native";
import * as Contacts from "expo-contacts";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.DisplayName],
      });
      setContacts(data);
    }
  };

  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleSendMoney = (contactName) => {
    Alert.alert(`Sending money to ${contactName}`);
  };

  const handleReceiveMoney = (contactName) => {
    Alert.alert(`Receiving money from ${contactName}`);
  };

  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      <MaterialIcons name="person" size={24} color="#666" style={styles.icon} />
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhoneNumber}>
          {item.phoneNumbers ? item.phoneNumbers[0].number : "N/A"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "#F0F0F0",
        }}
      >
        <TouchableOpacity
          onPress={() => handleSendMoney(item.name)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text
            style={{
              marginRight: 5,
              fontSize: 14,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Send
          </Text>
          <Ionicons name="send" size={24} color="#4caf50" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleReceiveMoney(item.name)}
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
        >
          <Text
            style={{
              marginRight: 5,
              fontSize: 14,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Request
          </Text>
          <Ionicons name="send" size={24} color="red" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contactsList}>
        {contacts.length > 0 ? (
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={renderContactItem}
            contentContainerStyle={styles.contactsListContent}
          />
        ) : (
          <Text style={styles.details}>No contacts found</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  contactsList: {
    flex: 1,
    marginTop: 40,
  },
  contactsListContent: {
    paddingBottom: 20,
  },
  contactItem: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contactPhoneNumber: {
    fontSize: 16,
    color: "#666",
  },
});
