import { View, FlatList,Animated, Dimensions, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PostComponent from "../Components/postComponent";
import ArticleComponent from "../Components/articleComponent";
import HeaderComponent from "../Components/headerComponent";
import { ScrollView } from "react-native";

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

  function getWidth() {
    let width = Dimensions.get("window").width;
  
    width = width - 80;
  
    return width / 5;
  }

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
        // marginTop: 100,
        // marginBottom: 90,
        width: width,
        height:  height
      }}
    >
      
      
      <HeaderComponent/>

      <View style={{flex: 1, flexDirection: "row", height: height, marginTop: 10 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataPart1}
          vertical={true}
          // style={{top:40, marginBottom : 40}}
          
          renderItem={({ item }) =>
            item.type == "post" ? (
              <PostComponent item={item} />
            ) : (
              <ArticleComponent item={item} />
            )
          }
          keyExtractor={(item) => item.id.toString()}
          // ListFooterComponent={renderLoader}
          // onEndReached={loadMoreItem}
          // onEndReachedThreshold={0}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataPart2}
          vertical={true}
          // style={{height: height*0.9, bottom: 55}}
          
          renderItem={({ item }) =>
            item.type == "post" ? (
              <PostComponent item={item} data={data} />
            ) : (
              <ArticleComponent item={item} data={data} />
            )
          }
          keyExtractor={(item) => item.id.toString()}
          // ListFooterComponent={renderLoader}
          // onEndReached={loadMoreItem}
          // onEndReachedThreshold={0}
        />
      </View>
      
      
    </View>
    
  );
}
