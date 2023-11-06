import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image} from 'react-native'
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/homeScreen.js";
import SearchScreen from "../Screens/searchScreen.js";
import SavedScreen from "../Screens/savedScreen.js";
import ProfileScreen from "../Screens/profileScreen.js";
import plus from '../assets/icons/plus.png';
import { FontAwesome5} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function appNavigation() {
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
        }}></Tab.Screen>

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
        }}></Tab.Screen>

        <Tab.Screen name="Actions Bar" component={EmptyScreen} options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: 'red',
                borderRadius: 60,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 50
              }}>
                <Image source={plus} style={{
                  width:22,
                  height: 22,
                  tintColor: 'white',
                }}/>
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

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
        }}></Tab.Screen>

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
        }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function EmptyScreen(){
  return(
    <View className={`flex-1 justify-center items-center`}>
      <Text>Actions Bar!</Text>
    </View>
  )
}