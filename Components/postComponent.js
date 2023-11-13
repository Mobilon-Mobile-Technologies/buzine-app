import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";


const { width, height } = Dimensions.get("window");

const cardWidth = width * 0.45;
const cardHeight = height * 0.38;

export default function PostComponent({ item }) {
  const navigation = useNavigation();

  if (item.url) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Post", { ...item })}
      >
        <View
          style={{
            height: cardHeight,
            width: cardWidth,
            marginLeft: 10,
            marginBottom: 10,
            borderRadius: 20,
            backgroundColor: "#f2f2f2",
            elevation: 5,
          }}
        >
          <Animated.Image
          sharedTransitionTag="sharedTag"
            source={{ uri: item.url }}
            style={{
              flex: 1,
              width: undefined,
              height: undefined,
              borderRadius: 20,
              resizeMode: "contain",
            }}
          />
          
          
        </View>
      </TouchableOpacity>
    );
  }
}
