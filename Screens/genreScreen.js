import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BackButton from "../Components/backButton";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

export default function GenreScreen() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigation=useNavigation();

  const toggleSelection = (genre) => {
    if (selectedGenres.includes(genre)) {
      // If already selected, remove it
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      );
    } else {
      // If not selected, add it
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const isGenreSelected = (genre) => {
    return selectedGenres.includes(genre);
  };

  return (
    <View style={{ height: height, width: width, marginHorizontal: 0 }}>
      <View style={{ marginHorizontal: 20 }}>
        <BackButton />
      </View>

      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Text style={{ fontSize: 30, fontWeight: "500" }}>
          Tell us what you're into
        </Text>
        <Text style={{ fontSize: 15, marginTop: 20, marginBottom: 50 }}>
          Tap once on the genres you like
        </Text>
      
      <View style={{ flexDirection: "row", padding: 10 }}>
        <TouchableOpacity
          onPress={() => toggleSelection("Nature")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Nature") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Nature") ? "white" : "black" }}
          >
            Nature
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Tech ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Tech ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Tech ") ? "white" : "black" }}
          >
            Tech
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Fashion ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Fashion ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Fashion ") ? "white" : "black" }}
          >
            Fashion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Travel ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Travel ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Travel ") ? "white" : "black" }}
          >
            Travel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Health ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Health ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Health ") ? "white" : "black" }}
          >
            Health
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Culinary ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Culinary ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Culinary ") ? "white" : "black" }}
          >
            Culinary
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", padding: 10, top: -45 }}>
      <TouchableOpacity
          onPress={() => toggleSelection("Wellness ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Wellness ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Wellness ") ? "white" : "black" }}
          >
            Wellness 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Arts ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Arts ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Arts ") ? "white" : "black" }}
          >
            Arts 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Culture ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Culture ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Culture ") ? "white" : "black" }}
          >
            Culture 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Science ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Science ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Science ") ? "white" : "black" }}
          >
            Science 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Pop")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Pop") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Pop") ? "white" : "black" }}
          >
            Pop
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Business ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Business ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Business ") ? "white" : "black" }}
          >
            Business 
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", padding: 10, top: -90 }}>
      <TouchableOpacity
          onPress={() => toggleSelection("Sports")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Sports") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Sports") ? "white" : "black" }}
          >
            Sports 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Garden")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Garden") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Garden") ? "white" : "black" }}
          >
            Garden
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Music ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Music ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Music ") ? "white" : "black" }}
          >
            Music 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Film ")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Film ") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Film ") ? "white" : "black" }}
          >
            Film 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Social")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Social") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Social") ? "white" : "black" }}
          >
            Social
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleSelection("Trends")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: isGenreSelected("Trends") ? "black" : "#ffd75b",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 1,
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: isGenreSelected("Trends") ? "white" : "black" }}
          >
            Trends
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Tabs")}>
      <Text style={{ padding:15, fontSize:20, fontWeight: '500', borderRadius: 20, borderWidth:2}}>Select Genres</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
