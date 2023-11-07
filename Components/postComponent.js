import { View, Text, Dimensions,Image } from 'react-native'
import React from 'react'

const {width, height}=Dimensions.get('window');

const cardWidth=width*0.45;
const cardHeight=height*0.38

export default function PostComponent({item}){
  return (
    <View style={{height: cardHeight, width: cardWidth, marginHorizontal: 20, marginVertical: 3, borderRadius: 20}}>
        
        <Image source={require(item.image)}></Image>
        
    </View>
  )
}
