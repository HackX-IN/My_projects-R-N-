import React from "react";
import { View, Text, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { APP_CONFIG } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import Ic from "react-native-vector-icons/MaterialIcons";
import { Pressable } from "react-native";

const { width, height } = Dimensions.get("window");

const DATA = [
  {
    name: "NOTIFICATION Title",
    time: "11:45",
    iconName: "chevron-right",
  },
  {
    name: "NOTIFICATION Title",
    time: "11:45",
    iconName: "chevron-right",
  },
  {
    name: "NOTIFICATION Title",
    time: "11:45",
    iconName: "chevron-right",
  },
];

const DataCard = ({navigation}) => {
  return (
    <View style={{ padding: 3 }}>
      <View
        style={{
          padding: 10,
          marginBottom: 10,
          backgroundColor: APP_CONFIG.APP_THEME.colors.BackBlur,
          width: width * 0.4,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: APP_CONFIG.APP_THEME.colors.secondaryContainer,
            textAlign: "center",
          }}
        >
          Nov 11th, 2021
        </Text>
      </View>

      <View style={{ width: "100%", height: "100%" }}>
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
                    fontSize: width * 0.04,
                    fontWeight: "600",
                    color: APP_CONFIG.APP_THEME.colors.surface,
                    marginTop: height * 0.02,
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
                  {item.time}
                </Text>
              </View>
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
          left: width * 0.65,
          bottom: height * 0.10,
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
     
  
    </View>
  );
};

export default DataCard;
