import React, { useRef } from "react";
import { View, Animated, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/homeScreen.js";
import SearchScreen from "../Screens/searchScreen.js";
// import SavedScreen from "../Screens/savedScreen.js";
import FeaturedDetails from "../Screens/featuredDetails.js";
import FeaturedList from "../Screens/featuredList.js";
import PostScreen from "../Screens/postScreen.js";
import ProfileScreen from "../Screens/profileScreen.js";
import UploadScreen from "../Screens/uploadScreen.js";
import AccountScreen from "../Screens/accountScreen.js";
import ArticleScreen from "../Screens/articleScreen.js";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SplashScreen from "../Screens/splashScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function appNavigation() {
  const TabNavigator = () => (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 30,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            paddingHorizontal: 20,
          },
        }}
      >
        {}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                }}
              >
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? "#fdc018" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                }}
              >
                <FontAwesome5
                  name="search"
                  size={20}
                  color={focused ? "#fdc018" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        {/* <Tab.Screen
          name="Actions Bar"
          component={UploadScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  // borderWidth: 1,
                  // padding: 10,
                  // borderRadius: 20,
                }}
              >
                <FontAwesome5
                  name="plus"
                  size={20}
                  color={focused ? "#fdc018" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen> */}

        <Tab.Screen
          name="Saved"
          component={FeaturedList}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                }}
              >
                <Ionicons
                  name="ios-star"
                  size={20}
                  color={focused ? "#fdc018" : "gray"}
                />
                {/* <FontAwesome5 name="bookmark" size={20}></FontAwesome5> */}
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name="Profile"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                }}
              >
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? "#fdc018" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: "#fdc018",
          position: "absolute",
          bottom: 88,
          left: 49,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </>
  );


  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{ title: "Post Screen", headerShown: false }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={{ title: "Article Screen", headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile Screen", headerShown: false }}
        />
        <Stack.Screen
          name="FeatureDetails"
          component={FeaturedDetails}
          options={{ title: "Profile Screen", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;

  width = width - 80;

  return width / 4;
}
