import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet,Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";

const {width, height}=Dimensions.get('screen');

const IMAGE_WIDTH=width*0.86;
const IMAGE_HEIGHT=IMAGE_WIDTH*1.5;
const VISIBLE_ITEMS=5;

export default function FeaturedList() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const baseURL =
    "https://raw.githubusercontent.com/Mobilon-Mobile-Technologies/buzine-app/archit-branch/Constants/topPosts.json";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    // <TouchableOpacity onPress={()=> navigation.navigate("FeatureDetails")} className={`flex-1 justify-center items-center`}>
    //   <View >
    //     <Text>Featured screen</Text>
    //   </View>
    // </TouchableOpacity>
    <SafeAreaView
      style={{ flex: 1,
        //  backgroundColor: "#1E1D1D"
        marginTop: 50 
        }}
    >
      <FlatList
        data={data}
        keyExtractor={(item)=>item.key}
        renderItem={({item})=>{
          return(
            <View>
              <Image source={{uri: item.profile_pic}} style={styles.image}/>
              <Text style={styles.name}>{item.title}</Text>
            </View>
          )
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image:{
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 16,
  }
})
