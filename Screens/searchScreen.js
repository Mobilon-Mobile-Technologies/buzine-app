import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { morePosts } from "../Constants/morePosts";

const {width,height}=Dimensions.get('screen');

export default function SearchScreen() {
  return (
    
    <View className={`flex-1 items-center mx-4`} style={{
      marginTop:60
    }}>
      <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
        <View style={styles.searchInputContainer}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            // onChangeText={(text) => setSearchQuery(text)}
            // value={searchQuery}
          />
          <TouchableOpacity
            className="rounded-full p-2"
            style={{ backgroundColor: "#fdc018" }}
          >
            <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{width: width, alignItems: 'flex-start'}}>
        <View style={{margin:20}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Popular Posts</Text>
          <FlatList
            data={morePosts}
            showsHorizontalScrollIndicator={false}
            horizontal
            
            renderItem={({ item }) => (
              <View style={{padding: 10, elevation: 10}}>
                <Image source={{uri: item.url}} styl
                e={{height: 250, width: 200, resizeMode: 'cover',borderRadius :20}}/>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#ff6347",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 10,
  },
  searchButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultCard: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  clubLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  resultDescription: {
    color: "gray",
  },
  noResults: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
});
