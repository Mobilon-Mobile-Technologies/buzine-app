import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../Components/backButton.js";

const { width, height } = Dimensions.get("screen");

export default function ProfileScreen(props) {
  const data = props.route.params;
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        height: height,
        width: width,
        backgroundColor: 'white'
      }}
    >
      <View style={{marginHorizontal: 20}}>
        <BackButton />

        <Text>ProfileScreen</Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {/* <Parallelogram /> */}
        </View>

        <Text>{data.username}</Text>
      </View>
    </View>
  );
}
