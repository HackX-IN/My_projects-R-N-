import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Data = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 1",
    time: "2h 30m",
    money: "-$25.99",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 2",
    time: "1h 45m",
    money: "+$19.50",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 3",
    time: "3h 15m",
    money: "-$32.75",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 4",
    time: "1h 10m",
    money: "+$12.99",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 5",
    time: "2h 0m",
    money: "+$28.00",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 6",
    time: "1h 0m",
    money: "+$10.00",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 7",
    time: "2h 15m",
    money: "$23.45",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 8",
    time: "2h 15m",
    money: "$23.45",
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 9",
    time: "2h 15m",
    money: "$23.45",
  },
];

const LastTransaction = () => {
  const renderItem = ({ item, index }) => {
    const isOdd = item.id % 2 !== 0;
    const caretColor = isOdd ? "#F8bb10" : "#1a87dd";
    const caretName = isOdd ? "caretup" : "caretdown";
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View
          style={{ position: "absolute", bottom: 0, left: 35, marginBottom: 3 }}
        >
          <AntDesign name={caretName} size={20} color={caretColor} />
        </View>
        <View style={styles.itemDetails}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemTime}>{item.time}</Text>
          </View>
          <Text style={styles.itemMoney}>{item.money}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 55 }}
    >
      <View style={{ marginTop: 10, padding: 20 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.Text1}>Last Transactions</Text>
          <Pressable style={{ padding: 5 }}>
            <Text style={styles.Text2}>View All</Text>
          </Pressable>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Specify unique key extractor
        />
      </View>
    </ScrollView>
  );
};

export default LastTransaction;

const styles = StyleSheet.create({
  Text1: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  Text2: {
    fontSize: 14,
    color: "#1a87dd",
    fontWeight: "700",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemTime: {
    fontSize: 14,
    color: "#888",
  },
  itemMoney: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
