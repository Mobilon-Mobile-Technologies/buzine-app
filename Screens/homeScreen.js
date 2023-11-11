import { View, FlatList,Text, Dimensions, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostComponent from "../Components/postComponent";
import ArticleComponent from "../Components/articleComponent";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [dataPart1, setDataPart1] = useState([]);
  const [dataPart2, setDataPart2] = useState([]);
  const [currentPage, setCurrentPage]=useState(1);

  const baseURL =
    "https://raw.githubusercontent.com/Mobilon-Mobile-Technologies/buzine-app/archit-branch/Constants/index.json";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setData(res.data);

        const shuffledData = res.data.slice().sort(() => Math.random() - 0.5);
        const halfwayIndex = Math.ceil(shuffledData.length / 2);
        setDataPart1(shuffledData.slice(0, halfwayIndex));
        setDataPart2(shuffledData.slice(halfwayIndex));
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  const renderLoader=()=>{
    return(
      <View style={{
        marginVertical: 16,
        alignItems: 'center',
      }}>
        <ActivityIndicator size="large" color="#aaa"/>
      </View>
    )
  }

  const loadMoreItem=()=>{
    console.log("load more item")
    setCurrentPage(currentPage+1);
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: 100,
        // marginBottom: 90,
        width: width,
      }}
    >

      <View style={{ flex: 1, flexDirection: "row" }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataPart1}
          vertical={true}
          renderItem={({ item }) =>
            item.type == "post" ? (
              <PostComponent item={item} />
            ) : (
              <ArticleComponent item={item} />
            )
          }
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataPart2}
          vertical={true}
          renderItem={({ item }) =>
            item.type == "post" ? (
              <PostComponent item={item} data={data} />
            ) : (
              <ArticleComponent item={item} data={data} />
            )
          }
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
      </View>
    </View>
  );
}
