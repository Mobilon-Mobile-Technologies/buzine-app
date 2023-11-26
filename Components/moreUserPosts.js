import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");
import { Ionicons } from "@expo/vector-icons";

export default function MoreUserPosts({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.95}>
      <View
        style={{
          height: height * 0.15,
          elevation: 1,
          width: width - 40,
          backgroundColor: "white",
          borderRadius: 10,
          marginBottom: 10,
          paddingHorizontal: 20,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={{ uri: item.url }}
          style={{
            height: 100,
            width: 100,
            resizeMode: "contain",
            borderRadius: 10,
          }}
        />
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginBottom: 10 }}>
            {item.title}
          </Text>
          <Text
            numberOfLines={2}
            style={{ fontSize: 12, lineHeight: 16 * 1, marginBottom: 10 }}
          >
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="ios-eye" size={24} color="#fdc018" />
            <Text style={{marginLeft: 6, fontWeight: '500'}}>{item.read_time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
