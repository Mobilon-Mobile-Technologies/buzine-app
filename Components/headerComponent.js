import React from "react";
import { View, Text, Platform, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Assuming you are using SafeAreaView from react-native-safe-area-context
import { FunnelIcon } from "react-native-heroicons/outline";

const { width,height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

export default function HeaderComponent() {
  return (
    <SafeAreaView style={{ marginTop: ios ? 50 : 0 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 25, alignItems: "center", marginTop: -10}}>
        <Image source={require("../assets/app_logo1.png")} style={{ height: height*0.11, width: width*0.25, resizeMode: "cover" }} />
        <FunnelIcon size={width * 0.07} color="black" />
      </View>
    </SafeAreaView>
  );
}
