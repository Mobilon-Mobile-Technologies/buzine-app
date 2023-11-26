import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const { width, height } = Dimensions.get("screen");
  const navigation=useNavigation();

  return (
    
    <TouchableOpacity
      activeOpacity={0.8}
      className={`p-1 rounded-xl ml-4`}
      style={{ backgroundColor: "white", borderWidth: 1, elevation: 10 }}
      onPress={() => navigation.goBack()}
    >
      <ChevronLeftIcon size={width * 0.07} strokeWidth={4} color="black" />
    </TouchableOpacity>
  );
}
