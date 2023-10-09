import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { APP_CONFIG } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import Ic from "react-native-vector-icons/MaterialIcons";
import { Pressable } from "react-native";

const { width, height } = Dimensions.get("window");

const DATA = [
  {
    name: "Trip",
    id: "#1000306",
    address: "San Francisco to Los Angeles",
    iconName: "chevron-right",
    position: "UPCOMING",
  },
  {
    name: "Trip",
    id: "#1000306",
    address: "San Francisco to Los Angeles",
    iconName: "chevron-right",
    position: "ENROUTE",
  },
  {
    name: "Trip",
    id: "#1000306",
    address: "San Francisco to Los Angeles",
    iconName: "chevron-right",
    position: "DELIVERED",
  },
];

const ExpenseCard = ({ navigation }) => {
  return (
    <View style={{ padding: 3 }}>
      <View style={{ width: "100%", height: "83%" }}>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: width * 0.04,
                marginTop: height * 0.02,
                marginBottom: height * 0.01,
                backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur,
                borderRadius: 10,
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: width * 0.05,
                    fontWeight: "600",
                    color: APP_CONFIG.APP_THEME.colors.onSurfaceVariant,
                    marginTop: height * 0.008,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: APP_CONFIG.APP_THEME.colors.primary,
                    marginTop: height * 0.01,
                    fontSize: width * 0.04,
                  }}
                >
                  {item.id}
                </Text>
                <Text
                  style={{
                    color: APP_CONFIG.APP_THEME.colors.primary,
                    marginTop: height * 0.01,
                    fontSize: width * 0.04,
                  }}
                >
                  {item.address}
                </Text>
              </View>

              <Text
                style={{
                  textTransform: "uppercase",
                  color: APP_CONFIG.APP_THEME.colors.secondary,
                  marginTop: height * 0.002,
                  fontSize: width * 0.04,
                }}
              >
                {item.position}
              </Text>
              <Icon
                name={item.iconName}
                size={width * 0.04}
                color={APP_CONFIG.APP_THEME.colors.Icon}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View
        style={{
          zIndex: 1,
          position: "absolute",
          top: width * 1.35,
          left: width * 0.65,
          bottom: height * 0.1,
          width: width * 0.15,
          height: width * 0.15,
          borderRadius: width * 0.075,
          backgroundColor: APP_CONFIG.APP_THEME.colors.secondary,
        }}
      >
        <Ic
          name="comment"
          size={width * 0.07}
          color={APP_CONFIG.APP_THEME.colors.onBackground}
          style={{ marginLeft: width * 0.04, marginTop: height * 0.02 }}
        />
      </View>

      <Pressable
      onPress={()=>navigation.navigate("Non-Expense")}
        style={{
          backgroundColor: APP_CONFIG.APP_THEME.colors.primary,
          padding: width * 0.06,
          borderRadius: width * 0.005,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: APP_CONFIG.APP_THEME.colors.secondary,
              fontSize: width * 0.04,
            }}
          >
            ADD NON-TRIP EXPENSES
          </Text>
          <Icon
            name="chevron-right"
            size={width * 0.04}
            color={APP_CONFIG.APP_THEME.colors.secondary}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default ExpenseCard;
