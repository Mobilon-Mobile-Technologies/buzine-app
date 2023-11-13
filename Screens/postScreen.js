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
import Animated, {FadeInDown, FadeInLeft, FadeInUp} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default function PostScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [isFollowing, toggleFollow]=useState(false);

  return (
    <View className={`bg-white flex-1 items-center`}>
      <Animated.Image
        sharedTransitionTag="sharedTag"
        source={{ uri: item.url }}
        style={{ width: width, height: height * 0.6, resizeMode: "repeat" }}
      />
      <StatusBar style={"light"} />

      <SafeAreaView
        className={`flex-row justify-between items-center w-full absolute`}
      >
        <TouchableOpacity
          className={`px-1 rounded-xl ml-4`}
          style={{ backgroundColor: "white" }}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={width * 0.08} strokeWidth={4} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          className={`p-2 rounded-full mr-4`}
          style={{ backgroundColor: "white" }}
          onPress={() => toggleFavourite(!isFavourite)}
        >
          <HeartIcon
            size={width * 0.07}
            strokeWidth={4}
            color={isFavourite ? "red" : "black"}
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
          <View className={`flex-row`}>
            <Animated.Text entering={FadeInLeft.duration(400).delay(400)} style={{fontSize: width*0.07, fontWeight: 'bold',}}>{item.title}</Animated.Text>
          </View>
          <Animated.View 
            entering={FadeInUp.duration(400).delay(600)}
          className={`flex-row  items-left w-full`}>
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
            <TouchableOpacity style={{left: width*0.40, elevation: 10 }} onPress={()=> toggleFollow(!isFollowing)}>
              <Text className={`bg-[#39ff5d] p-2 px-3 rounded-full `}>{isFollowing? "Following": "Follow"}</Text>
            </TouchableOpacity>
          </Animated.View>
          
          <Animated.Text entering={FadeInUp.duration(400).delay(600)} style={{fontSize: 20}}>{item.description}</Animated.Text>
          
          
        </ScrollView>
      </View>
    </View>
  );
}
