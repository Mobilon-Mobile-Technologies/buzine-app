import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
} from "react-native";
import React, { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";

import BackButton from "../Components/backButton";

const { width, height } = Dimensions.get("window");

export default function PostScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [isFollowing, toggleFollow] = useState(false);
  const [saved, toggleSaved] = useState(false);
  const snapPoints = useMemo(() => ["50%", "85%"], []);
  const url = "App URL";

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Buzine Coming Soon" + url,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(
            "shared with the activity type of: ",
            result.activityType
          );
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className={`bg-white flex-1 items-center`}>
      <Animated.Image
        entering={FadeIn.duration(400).delay(300)}
        source={{ uri: item.url }}
        style={{ width: width, height: height * 0.6, resizeMode: "repeat" }}
      />
      <StatusBar style={"dark"} />

      <SafeAreaView
        className={`flex-row justify-between items-center w-full absolute`}
      >
        <BackButton />

        {/* <TouchableOpacity
          activeOpacity={0.5}
          className={`p-1 rounded-xl mr-4`}
          style={{ backgroundColor: "white", borderWidth: 1, elevation: 10 }}
          onPress={() => toggleFavourite(!isFavourite)}
        >
          <Ionicons
            name="ios-warning-outline"
            size={width * 0.07}
            strokeWidth={4}
            color="black"
          />
        </TouchableOpacity> */}
      </SafeAreaView>

      <BottomSheet snapPoints={snapPoints}>
        <View
          style={{
            // borderTopLeftRadius: 40,
            // borderTopRightRadius: 40,
            width: width,
            height: height,
            // elevation: 20,
            marginTop: 1,
          }}
          className={`px-5 justify-between bg-white pt-8 -mt-14`}
        >
          <ScrollView
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            className={`space-y-5`}
            style={{ flex: 1 }}
          >
            <View className={`flex-row`}>
              <Animated.Text
                entering={FadeInLeft.duration(400).delay(500)}
                style={{ fontSize: width * 0.07, fontWeight: "bold" }}
              >
                {item.title}
              </Animated.Text>
            </View>
            <Animated.View
              entering={FadeInUp.duration(400).delay(650)}
              className={`flex-row justify-between items-center w-full`}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{ uri: item.profile_pic }}
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    {item.username}
                  </Text>
                  <Text>{item.upload_date}</Text>
                </View>
              </View>

              <TouchableOpacity
                style={{ elevation: 10 }}
                onPress={() => toggleFollow(!isFollowing)}
              >
                <Text
                  className={`bg-[#fdc018] p-2 px-3 rounded-full`}
                  style={{ fontWeight: "700" }}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.Text
              entering={FadeInUp.duration(400).delay(650)}
              style={{ fontSize: 20 }}
            >
              {item.description}
            </Animated.Text>

            <Animated.View
              entering={FadeInUp.duration(400).delay(700)}
              style={{ height: 2, backgroundColor: "black" }}
            ></Animated.View>
            <Animated.View
              entering={FadeInUp.duration(400).delay(750)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
                top: -10,
              }}
            >
              <TouchableOpacity onPress={() => toggleSaved(!saved)}>
                <Ionicons
                  name="ios-bookmarks-outline"
                  size={24}
                  color={saved ? "#fdc018" : "black"}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                <Ionicons
                  name="ios-heart-outline"
                  size={24}
                  color={isFavourite ? "red" : "black"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onShare}>
                <MaterialCommunityIcons
                  name="share-all-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <Ionicons name="ios-warning-outline" size={24} color="black" />
            </Animated.View>
            <Animated.View
              entering={FadeInUp.duration(400).delay(750)}
              style={{ height: 2, backgroundColor: "black", top: -20 }}
            ></Animated.View>

            <Animated.View
              entering={FadeInUp.duration(400).delay(800)}
              style={{ top: -10 }}
            ></Animated.View>
          </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
}
