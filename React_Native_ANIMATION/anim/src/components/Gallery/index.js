import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { API_KEY } from "../../config/API_KEY";

const URL = `https://api.pexels.com/v1/search?query=nature&size=small&orientation=potrait&per_page=15`;
const { width, height } = Dimensions.get("window");
const IMG_SIZE = 80;
const SPACING = 20;

const index = () => {
  const [images, setImages] = useState([]);
  const [ActiveIndex, setActiveIndex] = useState(0);
  const ThumbRef = useRef(null);
  const ScrollRef = useRef(null);

  const setScrollActive = (index) => {
    setActiveIndex(index);
    ScrollRef.current.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (IMG_SIZE + SPACING) - IMG_SIZE / 2 > width / 2) {
      ThumbRef.current.scrollToOffset({
        offset: index * (IMG_SIZE + SPACING) - width / 2 + IMG_SIZE / 2,
        animated: true,
      });
    } else {
      ThumbRef.current.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };
  const Get_images = async () => {
    const data = await fetch(URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const response = await data.json();
    return response.photos;
  };

  useEffect(() => {
    const FetchImage = async () => {
      const data = await Get_images();
      setImages(data);
    };
    FetchImage();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <FlatList
        ref={ScrollRef}
        data={images}
        renderItem={({ item, index }) => (
          <View style={{ width, height }}>
            <Image
              style={StyleSheet.absoluteFillObject}
              source={{ uri: item.src.portrait }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          setScrollActive(Math.floor(ev.nativeEvent.contentOffset.x / width));
        }}
      />
      <FlatList
        ref={ThumbRef}
        data={images}
        style={{ position: "absolute", bottom: IMG_SIZE }}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setScrollActive(index)}>
            <Image
              style={{
                width: IMG_SIZE,
                height: IMG_SIZE,
                marginRight: SPACING,
                borderRadius: 12,
                borderColor: ActiveIndex === index ? "#fff" : "transparent",
                borderWidth: 2,
              }}
              source={{ uri: item.src.portrait }}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
