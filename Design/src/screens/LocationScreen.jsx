import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { APP_CONFIG } from "../constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Pressable } from "react-native";
import { Dimensions } from "react-native";
import Ic from "react-native-vector-icons/MaterialIcons";
import { Image } from "react-native";

const { width, height } = Dimensions.get("window");
const ExpenseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: height * 0.05, // Use height value for margin top
        }}
      >
        <Image source={APP_CONFIG.IMAGES.BACK_ICON} />
        <Icon
          name="search"
          size={width * 0.08} // Use width value for icon size
          color={APP_CONFIG.APP_THEME.colors.surface}
        />
      </View>

      <View style={{ marginTop: height * 0.05, padding: width * 0.02 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              backgroundColor: APP_CONFIG.APP_THEME.colors.primary,
              fontSize: width * 0.04,
              fontWeight: "400",
              color: APP_CONFIG.APP_THEME.colors.secondary,
              padding: width * 0.02,
            }}
          >
            New Assignment FTL TRIP
          </Text>

          <Text
            style={{
              textAlign: "center",
              fontSize: width * 0.04,
              fontWeight: "300",
              color: APP_CONFIG.APP_THEME.colors.surface,
            }}
          >
            BAUNTRIP266
          </Text>
        </View>

        <View
          style={{
            padding: width * 0.02,
            marginTop: width * 0.03,
            marginBottom: width * 0.03,
          }}
        >
          <Image
            source={{
              uri: "https://previews.123rf.com/images/wiseant/wiseant2110/wiseant211000009/175823471-map-city-with-gps-and-geo-route-navigation-for-delivery-path-on-street-with-location-app-with-map.jpg",
            }}
            style={{
              width: width * 0.9,
              height: width * 0.6,
              resizeMode: "contain",
              borderRadius: 30,
            }}
          />
        </View>
        <View
          style={{
            padding: width * 0.02,
            marginTop: width * 0.01,
            height: "25%",
          }}
        >
          <View style={{ flexDirection: "row", padding: width * 0.03 }}>
            <Icon
              name="pin-drop"
              size={width * 0.1}
              color={APP_CONFIG.APP_THEME.colors.Icon}
              style={{ marginRight: width * 0.02 }}
            />
            <Text
              style={{
                fontSize: width * 0.03,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.surface,
                marginTop: -width * 0.03,
                marginLeft: width * 0.21,
              }}
            >
              LOAD #77890
            </Text>
            <Text
              style={{
                fontSize: width * 0.07,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.secondary,
                marginLeft: -width * 0.38,
              }}
            >
              5/17 - 5/18
            </Text>
            <Text
              style={{
                fontSize: width * 0.07,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.surface,
                marginLeft: width * 0.18,
              }}
            >
              Calgary
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: width * 0.03,
            }}
          >
            <Text
              style={{
                fontSize: width * 0.04,
                fontWeight: "200",
                color: APP_CONFIG.APP_THEME.colors.secondary,
                marginLeft: width * 0.15,
                marginTop: -width * 0.08,
              }}
            >
              17:00 - 19:00
            </Text>
            <Text
              style={{
                fontSize: width * 0.025,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.secondary,

                marginTop: -width * 0.08,
              }}
            >
              #436 flesweat st . Alberta,Calgary
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: width * 0.03,
            }}
          >
            <Text
              style={{
                fontSize: width * 0.035,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.Icon,
                marginLeft: width * 0.15,
                marginTop: -width * 0.08,
              }}
            >
              PICK #1
            </Text>
            <Text
              style={{
                fontSize: width * 0.025,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.secondary,

                marginTop: -width * 0.08,
              }}
            >
              Copy Address{" "}
              <Icon
                name="content-copy"
                size={width * 0.08}
                color={APP_CONFIG.APP_THEME.colors.CustomIcon}
              />
            </Text>
          </View>
          <View style={{ flexDirection: "row", padding: width * 0.03 }}>
            <Icon
              name="pin-drop"
              size={width * 0.1}
              color={APP_CONFIG.APP_THEME.colors.error}
              style={{ marginRight: width * 0.02 }}
            />
            <Text
              style={{
                fontSize: width * 0.03,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.surface,
                marginTop: -width * 0.03,
                marginLeft: width * 0.21,
              }}
            >
              LOAD #77890
            </Text>
            <Text
              style={{
                fontSize: width * 0.07,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.secondary,
                marginLeft: -width * 0.38,
              }}
            >
              5/19 - 5/20
            </Text>
            <Text
              style={{
                fontSize: width * 0.07,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.surface,
                marginLeft: width * 0.18,
              }}
            >
              New York
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: width * 0.03,
            }}
          >
            <Text
              style={{
                fontSize: width * 0.04,
                fontWeight: "200",
                color: APP_CONFIG.APP_THEME.colors.secondary,
                marginLeft: width * 0.15,
                marginTop: -width * 0.08,
              }}
            >
              17:00 - 19:00
            </Text>
            <Text
              style={{
                fontSize: width * 0.025,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.secondary,

                marginTop: -width * 0.08,
              }}
            >
              23 heavens st.Syra,NY
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: width * 0.03,
            }}
          >
            <Text
              style={{
                fontSize: width * 0.035,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.Icon,
                marginLeft: width * 0.15,
                marginTop: -width * 0.08,
              }}
            >
              DROP #1
            </Text>
            <Text
              style={{
                fontSize: width * 0.025,
                fontWeight: "300",
                color: APP_CONFIG.APP_THEME.colors.secondary,

                marginTop: -width * 0.08,
              }}
            >
              Copy Address{" "}
              <Icon
                name="content-copy"
                size={width * 0.08}
                color={APP_CONFIG.APP_THEME.colors.CustomIcon}
              />
            </Text>
          </View>
        </View>
      </View>

      <View>
        <View style={{ zIndex: 1,justifyContent:"center",alignItems:"center" }}>
          <Image
            source={APP_CONFIG.IMAGES.TRUCK_BANNER}
            style={{
              width: width * 0.1,
              height: width * 0.12,
              resizeMode: "contain",
              zIndex:1,
              marginTop: height * 0.01,
             
              
            }}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate("AddExpenseScreen")}
          style={{
            backgroundColor: APP_CONFIG.APP_THEME.colors.onSurfaceDisabled,
            padding: width * 0.06, // Use width value for padding
            borderRadius: width * 0.1, // Use width value for border radius
            marginTop: height * 0.02, // Use height value for margin top
            top: height * 0.02,
            left:width*0.18,
            width: width * 0.6,
            height: width * 0.2,
           
            
            position:"absolute"
          }}
        >
          <Text
            style={{
              fontSize: width * 0.06, // Use width value for font size
              fontWeight: "400",
              color: APP_CONFIG.APP_THEME.colors.background,
              marginTop: height * 0.01, // Use height value for margin top
              textAlign: "center",
            }}
          >
            TRIP DETAILS
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          zIndex: 1,
          position: "absolute",
          top: width * 1.95,
          left: width * 0.78,
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
    </View>
  );
};

export default ExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_CONFIG.APP_THEME.colors.background,
    padding: width * 0.02, // Use width value for padding
    flexDirection: "column",
  },
  text: {
    color: APP_CONFIG.APP_THEME.colors.Icon,
  },
});
