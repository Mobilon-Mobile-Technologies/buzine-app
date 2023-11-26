import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import BackButton from "../Components/backButton";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
} from "react-native-reanimated";
import { morePosts } from "../Constants/morePosts.js";
// import MoreUserPosts from "../Components/moreUserPosts.js";
import MoreArticles from "../Components/moreArticles.js";
import BottomButtons from "../Components/bottomButtons.js";

export default function ArticleScreen(props) {
  const item = props.route.params;
  const [isFollowing, toggleFollow] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <SafeAreaView
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 45,
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        >
          <BackButton />
        </SafeAreaView>

        <View style={{ marginHorizontal: 20 }}>
          <Animated.View
            className={`flex-row items-center`}
            entering={FadeInDown.duration(400).delay(500)}
          >
            <Ionicons name="ios-eye" size={24} color="#fdc018" />
            <Text style={{ marginLeft: 5, fontWeight: "600" }}>
              {item.read_time}
            </Text>
          </Animated.View>
          <Animated.Text
            entering={FadeInLeft.duration(400).delay(300)}
            style={styles.heading}
          >
            {item.title}
          </Animated.Text>

          <Animated.View
            entering={FadeIn.duration(400).delay(500)}
            className={`flex-row justify-between items-center w-full`}
          >
            <View
              style={{
                flexDirection: "row",
                marginVertical: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.profile_pic }}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
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

          <Animated.Image
            entering={FadeIn.duration(400).delay(700)}
            source={{ uri: item.url }}
            style={{
              width: width-40,
              height: height * 0.3,
              resizeMode: "cover",
              marginBottom: 20,
              borderRadius: 10,
            }}
          />
          <Animated.View entering={FadeInUp.duration(400).delay(900)}>
            <Text style={styles.paragraph}>{item.p1}</Text>
            <Text style={styles.paragraph}>{item.p2}</Text>
            <Text style={styles.paragraph}>{item.p3}</Text>
            <Text style={styles.paragraph}>{item.p4}</Text>
          </Animated.View>

          <Text style={styles.featuredTitle}>More Articles by {item.username}</Text>
          <FlatList
          // horizontal={true}
          showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={morePosts}
            renderItem={({ item }) => (
              <MoreArticles item={item}/>
            )}
          />
          <Text style={{ marginBottom: 30 }} />
        </View>
      </ScrollView>

      <BottomButtons item={item}/>
    </View>
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
  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    // marginLeft:15,
    // fontFamily: 'Georgia'
  },
  paragraph: {
    flex: 1,
    marginBottom: 10,
    // fontFamily: 'Georgia'
    fontSize: 14,
    lineHeight: 16 * 1.5,
  },
  icon: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
 
});
