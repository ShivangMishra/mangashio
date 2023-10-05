import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { black, white } from "../colors";
import {
  leftArrow,
  nextArrow,
  rightArrow,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  topImage,
} from "../assets";
import CustomButton from "../components/CustomButton";
import Mangashio from "../components/Mangashio";
import CustomHeader from "./CustomHeader";
import { useState } from "react";
import { FlatList } from "react-native";
import Swiper from "react-native-swiper";

export default function HomePage() {
  const POPULAR_ITEMS = [
    { image: thumbnail1, text: "Ore no Koto ga Daikirai na Imouto ga Kowai" },
    { image: thumbnail2, text: "Solo Levelling" },
    { image: thumbnail3, text: "Some crazy hoe" },
  ];

  const [popularItems, setPopularItems] = useState(POPULAR_ITEMS);

  TopSection = () => {
    return (
      <ImageBackground source={topImage} style={styles.topSection}
      width={428}
      height={272}
      >
        <CustomHeader />
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={styles.mainTitle}>Oshi no Ko</Text>
          <CustomButton
            text="Read now"
            textStyle={{ fontSize: 14, fontWeight: "600" }}
            buttonStyle={{ width: 86 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 11,
            paddingBottom: 11,
          }}
        >
          <Image source={leftArrow} />
          <Text style={{ fontSize: 10.5, fontWeight: "400", color: white }}>
            7/10
          </Text>
          <Image source={rightArrow} />
        </View>
      </ImageBackground>
    );
  };

  const renderItem = ({ item }) => {
    const { image, text } = item;
    return (
      <View
        style={{ width: 120, alignItems: "flex-start", marginRight: 16 }}
      >
        <Image source={image} width={120} height={164} resizeMode="cover" />
        <Text style={styles.mangaText}>{text}</Text>
      </View>
    );
  };
  ItemsRow = ({ title, items }) => {
    return (
      <View style={styles.rowContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16.7, fontWeight: "500", color: white }}>
            {title}
          </Text>
          <Image source={nextArrow} />
        </View>
          <FlatList data={items} renderItem={renderItem} horizontal 
          />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{width: "100%"}}>
      <TopSection />
      <ItemsRow title="Popular" items={popularItems} />
      <ItemsRow title="Latest Updates" items={popularItems} />
      <ItemsRow title="Recently Added" items={popularItems} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: black,
  },
  topSection: {
    width: "100%",
    height: 272,
    flexShrink: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainTitle: {
    color: white,
    fontSize: 37.6,
    marginTop: 10,
    fontWeight: "500",
    fontFamily: "Roboto",
    marginBottom: 15,
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 10,
  },
  mangaText: {
    color: white,
    fontSize: 11.27,
    fontWeight: "500",
    marginLeft: 5,
    width: 110,
  },
});
