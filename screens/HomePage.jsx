import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { black, lightGray, midGray, white } from "../colors";
import {
  close,
  leftArrow,
  nextArrow,
  rightArrow,
  searchItem,
  searchItemImg,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  topImage,
} from "../assets";

import Constants from "expo-constants";

import CustomButton from "../components/CustomButton";
import Mangashio from "../components/Mangashio";
import CustomHeader from "./CustomHeader";
import { useState } from "react";
import { FlatList } from "react-native";
import Swiper from "react-native-swiper";
import CustomTextInput from "../components/CustomTextInput";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const win = Dimensions.get("window");
  const ratio = win.width / 428;
  const navigation = useNavigation();
  const POPULAR_ITEMS = [
    { image: thumbnail1, text: "Ore no Koto ga Daikirai na Imouto ga Kowai" },
    { image: thumbnail2, text: "Solo Levelling" },
    { image: thumbnail3, text: "Some crazy hoe" },
  ];
  const SEARCH_ITEMS = [
    {
      title: "Solo Levelling",
      rating: 9.54,
      bookmarks: "6.1k",
      status: "Ongoing",
      image: searchItemImg,
    },
    {
      title: "Solo Levelling",
      rating: 9.54,
      bookmarks: "6.1k",
      status: "Ongoing",
      image: searchItemImg,
    },
    {
      title: "Solo Levelling",
      rating: 9.54,
      bookmarks: "6.1k",
      status: "Ongoing",
      image: searchItemImg,
    },
    {
      title: "Solo Levelling",
      rating: 9.54,
      bookmarks: "6.1k",
      status: "Ongoing",
      image: searchItemImg,
    },
  ];

  const [popularItems, setPopularItems] = useState(POPULAR_ITEMS);
  const [searchModal, setSearchModal] = useState(false);

  const TopSection = () => {
    return (
      <ImageBackground
        source={topImage}
        style={{
          width: "100%",
          height: 272 * ratio,
          flexShrink: 0,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomHeader 
        onSearch={() => setSearchModal(true)}
        onAccount={() => {navigation.navigate("AccountDetails")}}
        />
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

  const [searchItems, setSearchItems] = useState(SEARCH_ITEMS);
  const renderSearchItem = ({ item }) => {
    const { title, rating, bookmarks, status, image } = item;

    return (
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          padding: 5,
          backgroundColor: "rgba(217, 217, 217, 0.75)",
          marginBottom: 19,
          borderRadius: 4,
        }}
      >
        <Image
          source={image}
          width={66}
          height={90}
          style={{ marginRight: 10 }}
        />

        <View>
          <Text style={{ fontSize: 24, fontWeight: "500", color: white }}>
            {title}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 10, fontWeight: "400", color: white }}>
              {rating}
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "400", color: white }}>
              {bookmarks}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: lightGray,
              width: 70,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "400", color: white }}>
              {status}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const SearchModal = () => {
    return (
      <View
        style={{
          width: "100%",
          height: win.height,
          position: "absolute",
          zIndex: 1,
          backgroundColor: "rgba(31, 31, 31, 0.8)",
          marginTop: Constants.statusBarHeight,
          paddingTop: 10,
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomTextInput
            placeholder="Enter a search query..."
            inputStyle={{
              fontSize: 14,
              fontWeight: "400",
              fontFamily: "Roboto",
            }}
            outerStyle={{ flex: 0.98 }}
            search={true}
          />
          <TouchableOpacity onPress={() => setSearchModal(false)}>
            <Image source={close} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ width: "100%", marginTop: 40 }}
          data={searchItems}
          renderItem={renderSearchItem}
        />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const { image, text } = item;
    return (
      <View style={{ width: 120, alignItems: "flex-start", marginRight: 16 }}>
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
        <FlatList data={items} renderItem={renderItem} horizontal />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {searchModal && <SearchModal />}
      <ScrollView style={{ width: "100%" }}>
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
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    alignItems: "center",
    backgroundColor: black,
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
