import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../Components/backButton.js";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

export default function ProfileScreen(props) {
  const data = props.route.params;
  const navigation = useNavigation();
  return (
    <View style={{ height: height, width: width, alignItems: "center" }}>
      <SafeAreaView
        style={{
          backgroundColor: "#ffd75b",
          height: height * 0.5,
          width: width,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          elevation: 10,
        }}
      >
        <View style={{ marginHorizontal: 30, marginTop: 10 }}>
          <Animated.View
            entering={FadeInLeft.duration(400).delay(300)}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <BackButton/>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="black"
              style={{ marginTop: 40 }}
            />
          </Animated.View>
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Animated.Image
              entering={FadeIn.duration(400).delay(450)}
              source={{
                uri: data.profile_pic,
              }}
              style={{ height: 150, width: 150, borderRadius: 150 }}
            />
            <Animated.Text
              entering={FadeInUp.duration(400).delay(550)}
              style={{
                marginTop: 10,
                fontSize: 30,
                fontWeight: "700",
                color: "black",
              }}
            >
              {data.username}
            </Animated.Text>
            <Animated.View
              style={{ flexDirection: "row", alignItems: "center" }}
              entering={FadeInUp.duration(400).delay(650)}
            >
              <FontAwesome5 name="quote-left" size={24} color="black" />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  fontWeight: "500",
                  color: "black",
                  opacity: 0.5,
                  marginHorizontal: 10,
                }}
              >
                {data.bio}
              </Text>
              <FontAwesome5 name="quote-right" size={24} color="black" />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
      <Animated.View
        entering={FadeInUp.duration(400).delay(750)}
        style={{
          height: height * 0.28,
          width: width * 0.8,
          backgroundColor: "white",
          top: -70,
          borderRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: "500" }}>{data.uploads}</Text>
            <Text style={{ fontSize: 18, fontWeight: "400", opacity: 0.4 }}>
              Posts
            </Text>
          </View>
          <View
            style={{
              height: 50,
              width: 1,
              backgroundColor: "black",
              marginTop: 10,
            }}
          />

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: "500" }}>{data.followers}</Text>
            <Text style={{ fontSize: 18, fontWeight: "400", opacity: 0.4 }}>
              Followers
            </Text>
          </View>
          <View
            style={{
              height: 50,
              width: 1,
              backgroundColor: "black",
              marginTop: 10,
            }}
          />

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: "500" }}>{data.following}</Text>
            <Text style={{ fontSize: 18, fontWeight: "400", opacity: 0.4 }}>
              Following
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>About </Text>
          <Text style={{ lineHeight: 16 * 1.5, marginTop: 10 }}>
            {data.about_me}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}
