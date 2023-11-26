import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'

const {width,height}=Dimensions.get('screen')

export default function AuthorCard({item}) {
  return (
    <View style={{
        backgroundColor: 'white',
        marginHorizontal: 15,
        height: height*0.2,
        borderRadius: 10,
        elevation: 5,
        marginBottom: 10,
        flexDirection: 'row',
        padding: 15,
        
    }}>
    <Image source={{uri:  item.profile_pic}} style={{height: 60,width: 60, resizeMode: 'contain', borderRadius: 10 }}/>
      <Text>{item.title}</Text>
    </View>
  )
}