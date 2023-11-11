import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get("window");

export default function PostScreen () {
  return (
    <View >
      <Text>PostScreen</Text>
    </View>
  )
}

