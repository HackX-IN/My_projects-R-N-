import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { APP_CONFIG } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const Data = [
  {
    name: "BOL_TRIP28072",
  },
  {
    name: "BOL_TRIP28072",
  },
  {
    name: "BOL_TRIP28072",
  },
];

const Notification = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            padding: width * 0.04,
            marginTop: width * 0.1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            source={APP_CONFIG.IMAGES.BACK_ICON}
            style={{ width: width * 0.08, height: width * 0.08 }}
          />
          <Icon
            name="bell"
            size={width * 0.06}
            color={APP_CONFIG.APP_THEME.colors.surface}
          />
        </View>
        <View
          style={{
            padding: width * 0.08,
            marginTop: width * 0.08,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: width * 0.06,
              color: APP_CONFIG.APP_THEME.colors.surface,
              textTransform: "uppercase",
            }}
          >
            Notifications
          </Text>
          <Text style={styles.text}>7 UNREAD</Text>
        </View>

        <Text
          style={{
            color: APP_CONFIG.APP_THEME.colors.surface,
            fontSize: width * 0.04,
            textAlign: "right",
            marginRight: width * 0.03,
          }}
        >
          BAUNTRIP 266
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: width * 0.02,
          }}
        >
          <Text style={{ fontSize: width * 0.15, color: APP_CONFIG.APP_THEME.colors.secondary }}>
            3
          </Text>
          <Text
            style={{
              color: APP_CONFIG.APP_THEME.colors.surface,
              fontSize: width * 0.08,
              textTransform: "uppercase",
            }}
          >
            Trip DOCUMENTS
          </Text>
        </View>

        <View style={{ flex: 1, height: "100%", marginTop: width * 0.06, marginBottom: width * 0.14 }}>
          <FlatList
            data={Data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                onPress={()=>navigation.navigate("NotificationDocuments",{item:item})}
                  style={{
                    width: "100%",
                    height: "60%",
                    marginBottom: width * 0.014,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: APP_CONFIG.APP_THEME.colors.backdrop,
                    padding: width * 0.04,
                  }}
                >
                  <Icon
                    name="paperclip"
                    size={width * 0.08}
                    color={APP_CONFIG.APP_THEME.colors.icons}
                  />

                  <Text
                    style={{
                      color: APP_CONFIG.APP_THEME.colors.TextCustom,
                      fontSize: width * 0.06,
                      marginRight: width * 0.24,
                      marginLeft: width * 0.05,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "column", marginLeft: width * 0.02 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: width * 0.048,
                          color: APP_CONFIG.APP_THEME.colors.surface,
                          marginRight: width * 0.014,
                          marginTop: width * 0.007,
                        }}
                      >
                        PREVIEW
                      </Text>
                      <Icon
                        name="chevron-right"
                        size={width * 0.06}
                        color={APP_CONFIG.APP_THEME.colors.Icon}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: width * 0.001,
            marginTop: width * 0.014,
          }}
        >
          <Image
            source={APP_CONFIG.IMAGES.TRUCK_BANNER}
            style={{ width: width * 0.4, height: width * 0.4 }}
          />
        </View>
      </View>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_CONFIG.APP_THEME.colors.background,
    padding: width * 0.01,
    flexDirection: "column",
  },
  text: {
    color: APP_CONFIG.APP_THEME.colors.Icon,
    fontSize: width * 0.032,
  },
});
