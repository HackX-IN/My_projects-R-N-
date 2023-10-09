import { Image, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { Feather } from "@expo/vector-icons";
import Buttons from "../../components/Buttons";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              flex: 1,
              textAlign: "center",
              marginLeft: 20,
              color: "#FFf2ee",
            }}
          >
            My Profile
          </Text>
          <Feather name="edit-2" size={24} color="#FFf2ee" />
        </View>
        <View style={styles.secondHeader}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 50 }}
            source={{
              uri: "https://www.w3schools.com/howto/img_avatar.png",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              margin: 15,
              color: "#FFf2ee",
            }}
          >
            Inamul Hasan
          </Text>
        </View>
      </View>
      <View style={styles.Container2}>
        <Buttons name="My info" icon="person-outline" />
      </View>
      <View style={styles.Buttons}>
        <Buttons name="My cards" icon="card-outline" />
      </View>
      <View style={styles.Buttons}>
        <Buttons name="Settings" icon="md-settings-outline" />
      </View>
      <View style={styles.Buttons}>
        <Buttons name="Help Center" icon="chatbox-outline" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    height: 250,
    backgroundColor: "rgba(52,145,219,1)",
  },
  title: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(52,145,219,1)",
    marginTop: 35,
  },
  searchIcon: {
    marginRight: 10,
  },
  secondHeader: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    backgroundColor: "rgba(52,145,219,1)",
  },
  Container2: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "white",
    padding: 20,
  },
  Buttons: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    marginTop: -20,
  },
});
