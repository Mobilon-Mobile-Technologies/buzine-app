import React, { useRef,navigation } from "react";
import { View, Text, TouchableOpacity, Image} from 'react-native'
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/homeScreen.js";
import SearchScreen from "../Screens/searchScreen.js";
import SavedScreen from "../Screens/savedScreen.js";
import ProfileScreen from "../Screens/profileScreen.js";
import UploadScreen from "../Screens/uploadScreen.js";
import plus from '../assets/icons/plus.png';
import { FontAwesome5} from '@expo/vector-icons'
import { Animated } from "react-native";
import { Dimensions } from "react-native";

const Tab = createBottomTabNavigator();


export default function appNavigation() {

  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel: false, 
        tabBarStyle:{
          backgroundColor: 'white',
          position: 'absolute',
          bottom:30,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          paddingHorizontal: 20,
        }

      
      }}>
        {}
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: 'absolute',
              
            }}>
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({navigation,route}) => ({
          tabPress: e=>{
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: 'absolute',
              
            }}>
              <FontAwesome5
                name="search"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }}listeners={({navigation,route}) => ({
          tabPress: e=>{
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true,
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name="Actions Bar" component={UploadScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: 'absolute',
              
            }}>
              <FontAwesome5
                name="plus"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }}listeners={({navigation,route}) => ({
          tabPress: e=>{
            Animated.spring(tabOffsetValue, {
              toValue: getWidth()*2,
              useNativeDriver: true,
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name="Saved" component={SavedScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: 'absolute',
              
            }}>
              <FontAwesome5
                name="bookmark"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }}listeners={({navigation,route}) => ({
          tabPress: e=>{
            Animated.spring(tabOffsetValue, {
              toValue: getWidth()*3,
              useNativeDriver: true,
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: 'absolute',
              
            }}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }}listeners={({navigation,route}) => ({
          tabPress: e=>{
            Animated.spring(tabOffsetValue, {
              toValue: getWidth()*4,
              useNativeDriver: true,
            }).start();
          }
        })}></Tab.Screen>
      </Tab.Navigator>
      
      <Animated.View style={{
        width: getWidth()-20,
        height: 2,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 88,
        left: 49,
        borderRadius: 20,
        transform:[
          { translateX: tabOffsetValue}
        ]
      }}>

      </Animated.View>
    </NavigationContainer>
  );
}


function getWidth(){
  let width=Dimensions.get('window').width

  width=width-80

  return width/5
}