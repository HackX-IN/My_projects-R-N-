import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#000",
          tabBarStyle: {
            backgroundColor: "#f3f4f5",
            position: "absolute",
            bottom: 16,
            left: 20,
            right: 20,
            height: Platform.OS === "ios" ? 70 : 60,
            paddingHorizontal: Platform.OS === "ios" ? 10 : 5,
            borderRadius: 20,
            // shadowColor: "#000",
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
            // elevation: 3,
            zIndex: 999,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={28}
                color={focused ? color : "gray"}
                style={{ marginBottom: -3 }}
              />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="Transaction"
          options={{
            title: "Transaction",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "swap-vertical" : "swap-vertical-outline"}
                size={28}
                color={focused ? color : "gray"}
                style={{ marginBottom: -3 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Contact"
          options={{
            title: "Contact",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "md-people" : "md-people-outline"}
                size={28}
                color={focused ? color : "gray"}
                style={{ marginBottom: -3 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={28}
                color={focused ? color : "gray"}
                style={{ marginBottom: -3 }}
              />
            ),
          }}
        />
      </Tabs>
      {Platform.OS === "android" ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 95,
            backgroundColor: "rgba(26,135,221,0.8)",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          {/* Add content for the fixed view here */}
        </View>
      ) : null}
    </View>
  );
}
