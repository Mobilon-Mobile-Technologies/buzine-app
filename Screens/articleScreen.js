import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";
import BackButton from "../Components/backButton";
import Animated from "react-native-reanimated";
import { FadeIn } from "react-native-reanimated";

export default function ArticleScreen(props) {
  const item = props.route.params;
  const { width, height } = Dimensions.get("screen");

  return (
    <View className={`flex-1 items-center bg-white`}>
      <StatusBar style={"dark"} />
      <SafeAreaView
        className={`flex-row justify-between items-center w-full mt-10`}
      >
        <BackButton />
      </SafeAreaView>

      <View style={{elevation: 10}}>
        <Animated.Image
          entering={FadeIn.duration(400).delay(300)}
          source={{ uri: item.url }}
          style={{ width: width * 0.80, height: height * 0.3, marginTop: 50, borderRadius: 20 }}
        />
      </View>

      <Text>{item.title}</Text>
    </View>
  );
}
