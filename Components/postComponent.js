import { View, Text, Dimensions, Image } from "react-native";
import React,{useState} from "react";

const { width, height } = Dimensions.get("window");

const cardWidth = width * 0.45;
const cardHeight = height * 0.38;

export default function PostComponent({ item }) {
  
  if(item.url){
    return (
      <View
        style={{
          height: cardHeight,
          width: cardWidth,
          marginHorizontal: 20,
          marginVertical: 3,
          borderRadius: 20,
          backgroundColor: "black",
        }}
      >
        
        <Image
          source={{uri: item.url}}
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
