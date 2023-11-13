import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Touchable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

const { width, height } = Dimensions.get("window");

export default function PostScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View className={`bg-white flex-1 items-center`}>
      <Image
        source={{ uri: item.url }}
        style={{ width: width, height: height * 0.6, resizeMode: "repeat" }}
      />
      <StatusBar style={"light"} />

      <SafeAreaView
        className={`flex-row justify-between items-center w-full absolute`}
      >
        <TouchableOpacity
          className={`P-2 rounded-full ml-4`}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={width * 0.08} strokeWidth={4} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          className={`p-2 rounded-full mr-4`}
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          onPress={() => toggleFavourite(!isFavourite)}
        >
          <HeartIcon
            size={width * 0.07}
            strokeWidth={4}
            color={isFavourite ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <View
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          width: width,
          height: height,
          elevation: 20,
        }}
        className={`px-5 justify-between bg-white pt-8 -mt-14`}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          className={`space-y-5`}
        >
          <View className={`flex-row  items-left`}>
            <Image
              source={{ uri: item.profile_pic }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{ fontWeight: "bold", fontSize: 20 }}
              >
                {item.username}
              </Text>
              <Text></Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
