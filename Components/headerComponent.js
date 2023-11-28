import React from "react";
import {
  View,
  Text,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FunnelIcon } from "react-native-heroicons/outline";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";


export default function HeaderComponent() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ marginTop: ios ? 50 : 0 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 25,
          alignItems: "center",
          marginTop: -10,
        }}
      >
        <Image
          source={require("../assets/app_logo1.png")}
          style={{
            height: height * 0.11,
            width: width * 0.35,
            resizeMode: "cover",
            top: 15,
          }}
        />
        <TouchableOpacity onPress={()=>navigation.navigate("Genre")}>
          <FunnelIcon size={width * 0.07} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
