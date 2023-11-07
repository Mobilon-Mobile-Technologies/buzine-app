import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const baseURL =
  "https://raw.githubusercontent.com/Mobilon-Mobile-Technologies/buzine-app/archit-branch/Components/index.json?token=GHSAT0AAAAAACHSUEOT2WRUJRI35M5EW3XKZKKCP7Q";
  useEffect(() => {
    axios.get(baseURL)
      .then(res => {
        setData(res.data); // Update the state with the response data
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text>ID: {item.id}</Text>
        )}
        keyExtractor={(item) => item.id.toString()} // Provide a key extractor
      />
    </View>
  );
}
