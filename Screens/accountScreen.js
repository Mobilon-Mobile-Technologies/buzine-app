import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import BackButton from "../Components/backButton.js";
// import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

export default function AccountScreen() {
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
            <Text
              style={{
                fontSize: 30,
                fontWeight: "800",
                color: "black",
                marginTop: 40,
              }}
            >
              My Profile
            </Text>
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
                uri: "https://instagram.fdel23-1.fna.fbcdn.net/v/t51.2885-19/395094780_224963903933919_8873599177184933340_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel23-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=2oC4q4aTI7wAX8AMw98&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDwKDlZkUE9UgLXgBElVpdbxX7EGReCJCSLsRjAHpfKig&oe=656A592B&_nc_sid=ee9879",
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
              Anna Jones
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
                Aspiring writer with a love for words
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
            <Text style={{ fontSize: 25, fontWeight: "500" }}>5</Text>
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
            <Text style={{ fontSize: 25, fontWeight: "500" }}>105</Text>
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
            <Text style={{ fontSize: 25, fontWeight: "500" }}>37</Text>
            <Text style={{ fontSize: 18, fontWeight: "400", opacity: 0.4 }}>
              Following
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>About Me</Text>
          <Text style={{ lineHeight: 16 * 1.5, marginTop: 10 }}>
            Meet Lily, a code wizard who turns caffeine into code. Passionate
            about programming, she crafts digital wonders with keystrokes and
            coffee.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}
