import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

export default function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("FeatureLists");
    }, 3000);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={()=>navigation.navigate("FeatureLists")}>
        <LottieView
          source={require("../assets/lottie/splash.json")}
          autoPlay
          loop
          style={{ height: height * 0.2, width: width }}
        />
      </TouchableOpacity>
    </View>
  );
}
