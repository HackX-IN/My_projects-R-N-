import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderPage = ({ route }) => {
  const { orderedItems, orderId, paymentDetails, imageUrl, shippingTime } =
    route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  // Save order details to AsyncStorage after the successful payment
  const saveOrderDetails = async () => {
    const orderData = {
      orderedItems,
      orderId,
      paymentDetails,
      imageUrl,
      shippingTime,
    };
    try {
      await AsyncStorage.setItem('orderData', JSON.stringify(orderData));
    } catch (error) {
      console.log('Error saving order details:', error);
    }
  };

  useEffect(() => {
    // Save order details to AsyncStorage
    saveOrderDetails();
  }, []);

  // Retrieve order details from AsyncStorage
  useEffect(() => {
    const getStoredOrderDetails = async () => {
      try {
        const orderData = await AsyncStorage.getItem('orderData');
        if (orderData) {
          const parsedOrderData = JSON.parse(orderData);
          // Do something with the retrieved order data if needed
          console.log(parsedOrderData);
        }
      } catch (error) {
        console.log('Error retrieving order details:', error);
      }
    };

    getStoredOrderDetails();
  }, []);

  return (
    <View style={styles.container}>
     <View style={{flexDirection:"row",alignItems:"center",gap:10,marginBottom:10}}>
     <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
     <AntDesign name="arrowleft" size={24} color="black" />
   </TouchableOpacity>
   <Text style={styles.orderDetailsText}>Your Orders</Text>
     </View>
      {orderedItems.map((item) => (
        <View key={item._id} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <View style={styles.itemInfoContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            <Text style={styles.itemId}>Order ID: {orderId}</Text>
          </View>
        </View>
      ))}

      <View style={styles.orderInfoContainer}>
        <Text style={styles.shippingTime}>
          Approx. Shipping Time: {shippingTime}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  orderDetailsText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center",
    marginTop:14
  
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  itemInfoContainer: {
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "gray",
  },
  itemQuantity: {
    fontSize: 16,
    color: "gray",
  },
  itemId: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paymentId: {
    fontSize: 16,
    marginTop: 5,
  },
  orderInfoContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
  shippingTime: {
    fontSize: 16,
    marginTop: 10,
  },
  goBackButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  goBackText: {
    fontSize: 18,
    marginLeft: 5,
  },
});

export default OrderPage;
