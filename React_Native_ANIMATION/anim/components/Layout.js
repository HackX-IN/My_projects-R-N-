import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";

const App = () => {
  const initialMode = useRef(true);

  useEffect(() => {
    initialMode.current = false;
  }, []);
  const [items, setItems] = useState(
    new Array(5).fill(0).map((_, index) => ({ id: index }))
  );
  const Height = 80;
  const WIDTH = "80%";

  const onAdd = useCallback(() => {
    setItems((currentItems) => {
      const nextItemId = (currentItems[currentItems.length - 1]?.id ?? 0) + 1;
      return [...currentItems, { id: nextItemId }];
    });
  }, []);

  const onDelete = useCallback((itemId) => {
    setItems((currentItems) => {
      if (currentItems.length > 1) {
        return currentItems.filter((item) => item.id !== itemId);
      } else {
        return currentItems;
      }
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TouchableOpacity
        onPress={onAdd}
        style={{
          position: "absolute",
          bottom: 20,
          right: 15,
          zIndex: 40,
          backgroundColor: "black",
          height: 50,
          width: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 22, fontWeight: "800" }}>
          +
        </Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ paddingVertical: 50 }}>
        {items.map((item, index) => (
          <Animated.View
            key={item.id}
            onTouchEnd={() => onDelete(item.id)}
            entering={initialMode.current ? FadeIn.delay(100 * index) : FadeIn}
            layout={Layout.delay(100)}
            exiting={FadeOut}
            style={styles.listItem}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  listItem: {
    height: 100,
    backgroundColor: "#1d1d1d",
    width: "90%",
    marginVertical: 10,
    borderRadius: 20,
    alignSelf: "center",
    // Shadow on Android
    elevation: 5,
    // Shadow on iOS
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
  },
});
