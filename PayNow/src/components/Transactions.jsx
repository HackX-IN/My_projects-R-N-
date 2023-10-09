import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const Data = [
  // September
  {
    id: 1,
    month: "September",
    year: 2018,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 1",
    time: "2h 30m",
    money: "-$25.99",
  },
  {
    id: 2,
    month: "September",
    year: 2018,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 2",
    time: "1h 45m",
    money: "+$19.50",
  },

  // October
  {
    id: 6,
    month: "October",
    year: 2018,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 1",
    time: "2h 30m",
    money: "-$25.99",
  },
  {
    id: 7,
    month: "October",
    year: 2018,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 1",
    time: "2h 30m",
    money: "-$25.99",
  },
  // Add more items for October...
  // November
  {
    id: 11,
    month: "November",
    year: 2018,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 1",
    time: "2h 30m",
    money: "-$25.99",
  },
  {
    id: 12,
    month: "November",
    year: 2018,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 1",
    time: "2h 30m",
    money: "-$25.99",
  },
  {
    id: 13,
    month: "November",
    year: 2018,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 1",
    time: "2h 30m",
    money: "-$25.99",
  },
  {
    id: 14,
    month: "November",
    year: 2018,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoWqXPCMTcglHR0r0hb2VoUo8sbkCU2OfHHoBKQk&s",
    name: "Item 1",
    time: "2h 30m",
    money: "-$25.99",
  },
  // Add more items for November...
  // Continue for other months
];

const Transactions = () => {
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
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

  // Group data by month and year
  const groupedData = Data.reduce((acc, item) => {
    const key = item.month + "-" + item.year; // Add the year to the key
    acc[key] = acc[key] ? [...acc[key], item] : [item];
    return acc;
  }, {});

  // Extract individual month items
  const monthItems = Object.values(groupedData);

  return (
    <ScrollView
      contentContainerStyle={{ marginTop: 15, padding: 15 }}
      showsVerticalScrollIndicator={false}
    >
      {monthItems.map((item, index) => (
        <View key={index}>
          <Text style={styles.monthLabel}>
            {item[0].month} {item[0].year}
          </Text>
          <FlatList
            data={item}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
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
  monthLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
