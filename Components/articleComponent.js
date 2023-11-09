import { View, Text, Dimensions, Image } from "react-native";
import React, { useState, useEffect } from "react";

const { width, height } = Dimensions.get("window");

const cardWidth = width * 0.45;
const cardHeight = height * 0.2;

export default function ArticleComponent({ item, data }) {
  const [reorderCheck, setReorderCheck] = useState(null);

  useEffect(() => {
    var itemTypeCheck;
    try {
      itemTypeCheck = data.find((dataItem) => dataItem.id == item.id - 2);

      if (itemTypeCheck.type == "article") {
        console.log(item.id+" yes")
        setReorderCheck("true");
      } else {
        setReorderCheck("false");
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (item.url) {
    return (
      <View
        style={{
          height: cardHeight,
          width: cardWidth,
          marginLeft: 10,
          marginBottom: 6,
          borderRadius: 20,
          backgroundColor: "black",
          elevation: 5,
          bottom: reorderCheck=='true' ? width*0.37 :null
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
