import { View, Text, Dimensions,TouchableOpacity, Image } from "react-native";
import React from "react";
import { HeartIcon } from 'react-native-heroicons/outline'
import {HomeIcon as HomeSolid} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get("window");

const cardWidth = width * 0.45;
const cardHeight = height * 0.38;

export default function PostComponent({ item }) {

  const navigation =useNavigation();

  if (item.url) {
    return (
      <TouchableOpacity
      onPress={()=> navigation.navigate("Post")}>
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
        {/* <Text>hello</Text> */}
      </View>
      </TouchableOpacity>
    );
  }
}
