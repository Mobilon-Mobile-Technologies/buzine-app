import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const cardWidth = width * 0.45;
const cardHeight = height * 0.2;

export default function ArticleComponent({ item }) {
  const navigation = useNavigation();

  const tempImage="https://scontent.cdninstagram.com/v/t51.29350-15/371137545_1545056536251315_4018540056741051070_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=B91h8TGZppkAb7KAkoQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE3OTMzMjcyMzA2NzYyMDcwNA%3D%3D.2-ccb7-5&oh=00_AfCYM0jv-cH1U6iIxEpHsbLQ7KJi_4HSNuC31UKcOGC5ag&oe=661C0472&_nc_sid=10d13b";

  if (item.url) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Article", { ...item })}
      >
        <View
          style={{
            height: cardHeight,
            width: cardWidth,
            marginLeft: 10,
            marginBottom: 10,
            borderRadius: 20,
            backgroundColor: "#bebebd",
            elevation: 5,
          }}
        >
          <Image
            source={{ uri: item.url }}
            style={{
              flex: 1,
              // width: ,
              // height: undefined,
              borderRadius: 20,
              resizeMode: 'cover'
            }}
          />
          {/* <View style={{position: 'absolute'}}>
          <Image
            source={{ uri: item.profile_pic }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 3,
              borderWidth: 2,
              borderColor: 'white'
            }}
          ></Image>
        </View> */}
        </View>
      </TouchableOpacity>
    );
  }
}
