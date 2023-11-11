import { View, Text, Platform, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function HeaderComponent() {
  return (
    <View className={`items-center mb-5`}>
      <SafeAreaView style={ ios ? {marginTop: 50} : {marginTop: 45}}>
        
        <Text >headerComponent</Text>
      </SafeAreaView>
    </View>
  );
}
