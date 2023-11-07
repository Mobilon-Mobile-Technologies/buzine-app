import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostComponent from "../Components/postComponent";
import ArticleComponent from "../Components/articleComponent";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const baseURL =
    "https://raw.githubusercontent.com/Mobilon-Mobile-Technologies/buzine-app/archit-branch/Constants/index.json";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 100,
      }}
    >
      <FlatList
        data={data}
        vertical={true}
        numColumns={2}
        renderItem={({ item }) =>
          item.type=="post" ? <PostComponent item={item} /> : <ArticleComponent item={item}/>
        }
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
