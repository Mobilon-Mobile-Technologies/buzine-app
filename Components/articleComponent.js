import { View, Text, Dimensions, Image } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const cardWidth = width * 0.45;
const cardHeight = height * 0.2;

export default function ArticleComponent({ item }) {


  if (item.url) {
    return (
      <View
        style={{
          height: cardHeight,
          width: cardWidth,
          marginLeft: 10,
          marginBottom: 10,
          borderRadius: 20,
          backgroundColor: "#cbced6",
          elevation: 5,
        
        }}
      >
        <Image
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
    );
  }
}
