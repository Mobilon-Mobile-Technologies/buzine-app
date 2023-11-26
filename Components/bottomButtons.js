import { View, Text,TouchableOpacity,StyleSheet,Share } from "react-native";
import React, { useState } from "react";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BottomButtons({item}) {
  const [isFollowing, toggleFollow] = useState(false);
  const [liked, toggleLiked] = useState(false);
  const [saved, toggleSaved] = useState(false);
  const [likes, setLikes] = useState(326);

  const likeCounter = () => {
    toggleLiked(!liked);

    setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Download the Buzine App to check out this article by ${item.username}\nTitled: ${item.title}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with the activity type of" + result.activityType);
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Dismissed");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Animated.View
        entering={FadeIn.duration(400).delay(900)}
        style={[
          styles.bottomActions,
          {
            paddingHorizontal: 20,
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => likeCounter()}>
            <Ionicons
              name="ios-heart-outline"
              size={24}
              style={{ marginHorizontal: 10 }}
              color={liked ? "red" : "black"}
            />
          </TouchableOpacity>
          <Text>{likes}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => onShare()}>
            <View style={[styles.icon]}>
              <MaterialCommunityIcons
                name="share-all-outline"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleSaved(!saved)}>
            <View style={[styles.icon]}>
              <Ionicons
                name="ios-bookmarks-outline"
                size={24}
                color={saved ? "#fdc018" : "black"}
              />
            </View>
          </TouchableOpacity>
          <View style={[styles.icon]}>
            <Ionicons name="ios-warning-outline" size={24} color="black" />
          </View>
        </View>
      </Animated.View>
  );
}

const styles = StyleSheet.create({
    bottomActions: {
        height: 60,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        // elevation: 1
    
      },
    icon: {
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
      },
});