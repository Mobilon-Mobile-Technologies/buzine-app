import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FeaturedList() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate("FeatureDetails")} className={`flex-1 justify-center items-center`}>
      <View >
        <Text>Featured screen</Text>
      </View>
    </TouchableOpacity>
  );
}
