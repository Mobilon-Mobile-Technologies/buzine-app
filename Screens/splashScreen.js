import { View, Text, StyleSheet, Dimensions,Image } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import Animated, { FadeIn, FadeInLeft, FadeInRight } from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

const SplashScreen = (props) => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace("Tabs");
    }
  }, [authLoaded, props.navigation]);

  return (
    <View style={styles.root}>
      {/* <StatusBar style={"dark"} /> */}
      <Animated.View entering={FadeIn.duration(800).delay(200)} >
        {/* <LottieView
          source={require("../assets/lottie/splash.json")}
          autoPlay
          loop
          style={{ height: height * 0.2, width: width }}
        /> */}
        <Image source={require('../assets/app_logo2.png')} style={{height: height*0.3, resizeMode: 'contain'}}/>
      </Animated.View>
      {/* <Image source={require('../assets/app_logo2.png')} style={{height: height*0.3, resizeMode: 'contain'}}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#rgb(248, 215, 124)'
  },
});

export default SplashScreen;
