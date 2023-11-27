import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");

export default function AuthorCard({ item }) {
  const navigation=useNavigation();
  const [data, setData] = useState([]);
  const [authordata, setAuthorData] = useState([]);
  const baseURL =
    "https://raw.githubusercontent.com/Mobilon-Mobile-Technologies/buzine-app/archit-branch/Constants/users.json";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setData(res.data);
        // console.log(data[1]?.username)
        
        const author = res.data.find(
          (entry) => entry.username === item.username
        );

        if (author) {
          setAuthorData(author);
          console.log("user found");
          console.log(authordata);
        } else {
          console.log("User not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View
      style={{
        backgroundColor: "white",
        marginHorizontal: 15,
        height: height * 0.2,
        borderRadius: 10,
        elevation: 5,
        marginBottom: 10,
        padding: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={{ uri: authordata.profile_pic }}
          style={{
            height: 60,
            width: 60,
            resizeMode: "contain",
            borderRadius: 10,
          }}
        />
        <TouchableOpacity onPress={()=>navigation.navigate("Profile",{...authordata})}>
          <Text
            style={{
              backgroundColor: "#dfe6f0",
              padding: 7,
              borderRadius: 10,
              fontWeight: "600",
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>
        {/* <Text>{authordata.username}</Text> */}
      </View>
      <Text style={{fontSize: 19, fontWeight: '600', marginTop: 5}}>Written by {authordata.username}</Text>
      <Text style={{marginTop: 10}}>{authordata.bio}</Text>
    </View>
  );
}
