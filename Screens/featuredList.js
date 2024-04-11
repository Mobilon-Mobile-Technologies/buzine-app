import * as React from "react";
import {
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const DATA = [
  {
    id: 1,
    username: "Aiden",
    genre: "Summit",
    profile_pic:
      "https://instagram.fdel23-1.fna.fbcdn.net/v/t51.2885-19/378998298_1429558327835950_513364371968140098_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel23-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=yczSOJd7xwYAX-A1Bny&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCNMYc31JaHWl0zpFx_fQECf06-0hyjI6t0F2YRlkxBdg&oe=6554AB66&_nc_sid=ee9879",
    title: "Summit Serenity",
    post_url:
      "https://i.ibb.co/qBDvgL1/gaurav-k-CV7-KPRM6f-Hc-unsplash.jpg",
    likes: "980",
    ref: React.createRef(),
  },
  {
    id: 2,
    username: "Ethan",
    genre: "Wildlife",
    profile_pic:
      "https://instagram.fdel23-1.fna.fbcdn.net/v/t51.2885-19/376738036_858866555651540_586937807684137894_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel23-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=JkrGHmhJWoYAX9AgfB8&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAHfTzPc1euspyxhDHEcnoEbdqLzgMm69E5TabZKMSKaA&oe=65549A27&_nc_sid=ee9879",
    title: "Graceful Gazes",
    post_url:
      "https://i.ibb.co/rdrHQY8/geranimo-f0oe9-P9-Yixs-unsplash.jpg",
    likes: "372",
    ref: React.createRef(),
  },
  {
    id: 3,
    username: "Ava",
    genre: "Frost",
    profile_pic:
      "https://instagram.fdel23-1.fna.fbcdn.net/v/t51.2885-19/380497495_694983475391867_8005773484427088049_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel23-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=_MlXsHDVNzoAX_a1Wxy&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfD49OZoKj5PAx8w_jZTk8NtHotCtaAsMCZpkC3JpXXidA&oe=6554017F&_nc_sid=ee9879",
    title: "Blanket of Snow",
    post_url:
      "https://i.ibb.co/VmjdBCs/rostyslav-savchyn-j-Vfm-7-Dc-Scc-unsplash.jpg",
    likes: "1042",
    ref: React.createRef(),
  },
  {
    id: 4,
    username: "Isabella",
    genre: "Bloom",
    profile_pic:
      "https://instagram.fdel23-1.fna.fbcdn.net/v/t51.2885-19/300401706_206282878402653_1888720962968405032_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel23-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=BU2ge5VO0GAAX8x1Yal&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCD_nPvIHph-GAM3DU3rYQAW1NFllSm1cGs-luQpvIE9A&oe=6555703F&_nc_sid=ee9879",
    title: "Timeless Beauty",
    post_url:
      "https://i.ibb.co/YtGVqfc/ryan-tasto-4ikxlw-J-mj8-unsplash.jpg",
    likes: "651",
    ref: React.createRef(),
  },
  {
    id: 5,
    username: "Ella",
    genre: "Ripple",
    profile_pic:
      "https://instagram.fdel23-1.fna.fbcdn.net/v/t51.2885-19/338671610_958510015564185_7389476733571808788_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel23-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=UCwAGUZHaa4AX_cP3HE&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBoOZ_SI5Y2MRDeSjU2QQ_R1UDmh8zVUX7gGdP1HkAkiw&oe=65541869&_nc_sid=ee9879",
    title: "Echoes of Wisdom",
    post_url:
      "https://i.ibb.co/6n3MhMy/sami-matias-v05-Hv8l-T-40-unsplash.jpg",
    likes: "1672",
    ref: React.createRef(),
  },
];

const Tab = React.forwardRef(({ item, onItemPress }, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref}>
        <Text
          style={{
            color: "white",
            fontSize: 84 / DATA.length,
            fontWeight: "800",
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          {item.genre}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const Indicator = ({ measures, scrollX }) => {
  const inputRange = DATA.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        height: 4,
        width: indicatorWidth,
        left: 0,
        backgroundColor: "white",
        bottom: -10,
        opacity: 0.8,
        transform: [
          {
            translateX,
          },
        ],
      }}
    ></Animated.View>
  );
};

const Tabs = ({ data, scrollX, onItemPress }) => {
  const [measures, setMeasures] = React.useState([]);
  const containerRef = React.useRef();
  React.useEffect(() => {
    const m = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({
            x,
            y,
            width,
            height,
          });

          if (m.length === DATA.length) {
            setMeasures(m);
          }
        }
      );
    });
  }, []);
  console.log(measures);
  return (
    <View style={{ position: "absolute", top: 120, width }}>
      <View
        ref={containerRef}
        style={{
          justifyContent: "space-evenly",
          flexDirection: "row",
          flex: 1,
        }}
      >
        {data.map((item, index) => {
          return (
            <Tab
              key={item.id}
              item={item}
              ref={item.ref}
              onItemPress={() => {
                onItemPress(index);
              }}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

export default function FeaturedList() {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef();
  const onItemPress = React.useCallback((itemIndex) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  });
  return (
    <View style={styles.container}>
      {/* <StatusBar style={"light"} /> */}
      <Animated.FlatList
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        bounces={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width: width, height: height }}>
              <Image
                source={{ uri: item.post_url }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { backgroundColor: "rgba(0,0,0,0.3)" },
                ]}
              ></View>
              <View
                style={{
                  position: "absolute",
                  bottom: height * 0.07,
                  width: width,
                  opacity: 0.8,
                  // backgroundColor: "rgba(0,0,0,0.6)",
                  marginLeft: 10,
                  padding: 10,
                  borderRadius: 20,
                  elevation: 10,
                }}
              >
                <Text
                  style={{ fontSize: 40, fontWeight: "900", color: "#eeeeee" }}
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={{ uri: item.profile_pic }}
                      style={{
                        height: 60,
                        width: 60,
                        resizeMode: "contain",
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: "white",
                      }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text
                        style={{
                          color: "white",

                          fontWeight: "500",
                          fontSize: 25,
                        }}
                      >
                        {item.username}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Ionicons name="ios-heart" size={24} color="red" />
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "500",
                            fontSize: 15,
                            marginLeft: 5,
                          }}
                        >
                          {item.likes}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 50,
          flexDirection: "row",
          left: 0,
          marginHorizontal: 20,
          alignItems: "center",
          // opacity: 0.8
        }}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="ios-arrow-back-outline" size={34} color="white" />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 25,
            color: "white",
            fontWeight: "800",
            marginLeft: 20,
          }}
        >
          Top Picks Now
        </Text>
      </View>
      <Tabs scrollX={scrollX} data={DATA} onItemPress={onItemPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
