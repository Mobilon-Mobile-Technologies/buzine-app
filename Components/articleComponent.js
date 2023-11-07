import { View, Text } from 'react-native'
import React from 'react'

export default function ArticleComponent({item}){
  return (
    <View>
        <Text>{item.title}</Text>
    </View>
  )
}