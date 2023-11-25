import React from 'react';
import { View, Text, FlatList, Dimensions, Image, ScrollView } from 'react-native';
import { morePosts } from '../Constants/morePosts.js';

const { width, height } = Dimensions.get('screen');

export default function MoreFromUser() {
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Image source={{ uri: item.image_url }} style={{ height: height * 0.25, width: width, resizeMode: 'cover' }} />
      <Text style={{ marginTop: 5, textAlign: 'center' }}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={morePosts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
