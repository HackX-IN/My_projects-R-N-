import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import Ic from "react-native-vector-icons/MaterialIcons";
import { APP_CONFIG } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import DataCard from "../components/DataCard";
import { Dimensions } from "react-native";
import ExpenseCard from "../components/ExpenseCard";

const ScanDocument = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={APP_CONFIG.APP_THEME.colors.background}
        style="light"
      />
      <View
        style={{
          padding: 10,
          marginTop: 50,
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
          name="search"
          size={22}
          color={APP_CONFIG.APP_THEME.colors.surface}
        />
      
      </View>
   
      <View
        style={{
          marginTop: width * 0.014,
          padding: width * 0.04,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "400",
            color: APP_CONFIG.APP_THEME.colors.surface,
          }}
        >
          #10003890
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: width * 0.01,
            fontWeight: "400",
            color: APP_CONFIG.APP_THEME.colors.primary,
          }}
        >
          Add Expense
        </Text>
      </View>

      <View style={{ marginTop: width * 0.014, padding: width * 0.04 }}>
        <Pressable
          style={{
            marginBottom: width * 0.03,
            backgroundColor: APP_CONFIG.APP_THEME.colors.primary,
            padding: width * 0.04,
            borderRadius: width * 0.02,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: width * 0.04,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: APP_CONFIG.APP_THEME.colors.surface,
              }}
            >
              Browse path
            </Text>
            <Text
              style={{
                marginRight: -width * 0.09,
                fontSize: 18,
                fontWeight: "400",
                color: APP_CONFIG.APP_THEME.colors.secondary,
              }}
            >
              Select Path
            </Text>
            <Icon
              name="chevron-right"
              size={18}
              color={APP_CONFIG.APP_THEME.colors.secondary}
            />
          </View>
        </Pressable>
        <Pressable
          style={{
            marginBottom: width * 0.045,
            backgroundColor: APP_CONFIG.APP_THEME.colors.primary,
            padding: width * 0.04,
            borderRadius: width * 0.02,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: width * 0.04,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: APP_CONFIG.APP_THEME.colors.surface,
              }}
            >
              Browse Photos
            </Text>
            <Text
              style={{
                marginRight: -width * 0.09,
                fontSize: 18,
                fontWeight: "400",
                color: APP_CONFIG.APP_THEME.colors.secondary,
              }}
            >
              Select
            </Text>
            <Icon
              name="chevron-right"
              size={18}
              color={APP_CONFIG.APP_THEME.colors.secondary}
            />
          </View>
        </Pressable>

        <Pressable
        onPress={navigation.navigate("AddSIGN")}
          style={{
            marginBottom: width * 0.03,
            backgroundColor: APP_CONFIG.APP_THEME.colors.primary,
            padding: width * 0.04,
            borderRadius: width * 0.02,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "400",
              color: APP_CONFIG.APP_THEME.colors.secondary,
            }}
          >
            Scan Documents
          </Text>
        </Pressable>
        <View
        style={{
          zIndex: 1,
          position: "absolute",
          top: width * 1.35,
          left: width * 0.75,
          bottom: width * 0.1,
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
          style={{ marginLeft: width * 0.04, marginTop: width * 0.05 ,alignItems:"center"}}
        />
      </View>
      </View>
    <View style={{ marginTop: -width * 0.600, padding: width * 0.04,justifyContent:"center",alignItems:"center" }}>
    <Image source={APP_CONFIG.IMAGES.TRUCK_BANNER} style={{ width: 200,resizeMode:"contain" }} />
    </View>
    </View>
  );
};

export default ScanDocument;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_CONFIG.APP_THEME.colors.background,
    padding: 10,
  },
});
