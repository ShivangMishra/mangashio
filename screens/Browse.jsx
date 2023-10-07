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
import {
  black,
  blue,
  gray,
  lightGray,
  midGray,
  ongoingColor,
  purple,
  white,
} from "../colors";
import {
  bookmark,
  close,
  leftArrow,
  nextArrow,
  rightArrow,
  searchItem,
  searchItemImg,
  starImg,
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
import { Dropdown } from "react-native-element-dropdown";

export default function Browse() {
  const win = Dimensions.get("window");
  const ratio = win.width / 428;
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Best Match");

  const ITEMS = [
    {
      image: thumbnail2,
      title: "Solo Levelling",
      tags: ["Homosexual", "Homosexual", "Homosexual"],
      description:
        "Shuichi, a high school student, ended up marrying his childhood friend whom he thought was a boy. At their reunion after 10 years, his childhood friend Yuika had transformed into a beautiful girl, which initially made Shuichi quite nervous. However, as time passed, he gradually grew accustomed to the sense of closeness as best friends—and thus, their love story as an ideal couple with a charming touch of innocence begins!h",
      stars: 9.54,
      bookmarks: "6.1k",
      status: "Ongoing",
    },
    {
      image: thumbnail2,
      title: "Solo Levelling",
      tags: ["Homosexual", "Homosexual", "Homosexual"],
      description:
        "Shuichi, a high school student, ended up marrying his childhood friend whom he thought was a boy. At their reunion after 10 years, his childhood friend Yuika had transformed into a beautiful girl, which initially made Shuichi quite nervous. However, as time passed, he gradually grew accustomed to the sense of closeness as best friends—and thus, their love story as an ideal couple with a charming touch of innocence begins!h",
      stars: 9.54,
      bookmarks: "6.1k",
      status: "Ongoing",
    },
    {
      image: thumbnail2,
      title: "Solo Levelling",
      tags: ["Homosexual", "Homosexual", "Homosexual"],
      description:
        "Shuichi, a high school student, ended up marrying his childhood friend whom he thought was a boy. At their reunion after 10 years, his childhood friend Yuika had transformed into a beautiful girl, which initially made Shuichi quite nervous. However, as time passed, he gradually grew accustomed to the sense of closeness as best friends—and thus, their love story as an ideal couple with a charming touch of innocence begins!h",
      stars: 9.54,
      bookmarks: "6.1k",
      status: "Ongoing",
    },
    {
      image: thumbnail2,
      title: "Solo Levelling",
      tags: ["Homosexual", "Homosexual", "Homosexual"],
      description:
        "Shuichi, a high school student, ended up marrying his childhood friend whom he thought was a boy. At their reunion after 10 years, his childhood friend Yuika had transformed into a beautiful girl, which initially made Shuichi quite nervous. However, as time passed, he gradually grew accustomed to the sense of closeness as best friends—and thus, their love story as an ideal couple with a charming touch of innocence begins!h",
      stars: 9.54,
      bookmarks: "6.1k",
      status: "Ongoing",
    },
    {
      image: thumbnail2,
      title: "Solo Levelling",
      tags: ["Homosexual", "Homosexual", "Homosexual"],
      description:
        "Shuichi, a high school student, ended up marrying his childhood friend whom he thought was a boy. At their reunion after 10 years, his childhood friend Yuika had transformed into a beautiful girl, which initially made Shuichi quite nervous. However, as time passed, he gradually grew accustomed to the sense of closeness as best friends—and thus, their love story as an ideal couple with a charming touch of innocence begins!h",
      stars: 9.54,
      bookmarks: "6.1k",
      status: "Ongoing",
    },
    {
      image: thumbnail2,
      title: "Solo Levelling",
      tags: ["Homosexual", "Homosexual", "Homosexual"],
      description:
        "Shuichi, a high school student, ended up marrying his childhood friend whom he thought was a boy. At their reunion after 10 years, his childhood friend Yuika had transformed into a beautiful girl, which initially made Shuichi quite nervous. However, as time passed, he gradually grew accustomed to the sense of closeness as best friends—and thus, their love story as an ideal couple with a charming touch of innocence begins!h",
      stars: 9.54,
      bookmarks: "6.1k",
      status: "Ongoing",
    },
  ];

  const SORT_FILTERS = [{ label: "Best Match", value: "Best Match" }, { label: "Date", value: "Date" }];

  const [items, setItems] = useState(ITEMS);
  const [selectedKey, setSelectedKey] = useState("Reading");

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: "100%",
          // backgroundColor: "red",
          flexDirection: "row",
          paddingHorizontal: 5,
          paddingBottom: 10,
          backgroundColor: gray,
          borderRadius: 4,
          marginBottom: 10,
        }}
        key={item.title}
      >
        <View
          style={{
            paddingTop: 9,
            // backgroundColor: "blue",
            width: 78,
            // paddingHorizontal: 2,
            // justifyContent: "center",
            alignItems: "center",
            // flex: 0.3
          }}
        >
          <Image
            source={item.image}
            style={{
              width: 76,
              height: 104,
              resizeMode: "cover",
              borderRadius: 2.5,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              width: 74,
              // backgroundColor: "green",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={starImg} />
              <Text
                style={{
                  fontSize: 10,
                  color: white,
                  fontWeight: "400",
                  fontFamily: "Roboto",
                }}
              >
                {item.stars}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={bookmark} />
              <Text
                style={{
                  fontSize: 10,
                  color: white,
                  fontWeight: "400",
                  fontFamily: "Roboto",
                }}
              >
                {item.bookmarks}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginLeft: 6,
            paddingRight: 5,
            // width: "80%",
            flex: 1,
            marginVertical: 10,
            // backgroundColor: "orange",
            // paddingHorizontal: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end",
              backgroundColor: lightGray,
              borderRadius: 3.4,
              paddingHorizontal: 5,
              alignItems: "center",
              marginBottom: -5,
            }}
          >
            <View
              style={{
                backgroundColor: ongoingColor,
                width: 5.1,
                height: 5.1,
                borderRadius: 100,
                marginRight: 2,
              }}
            ></View>
            <Text
              style={{
                fontSize: 6.78,
                color: white,
                fontWeight: "700",
                fontFamily: "Roboto",
              }}
            >
              {item.status}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18.4,
              fontWeight: "700",
              color: white,
              fontFamily: "Roboto",
            }}
          >
            {item.title}
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 4.56,
              marginBottom: 5,
              // width: "70%",
            }}
          >
            {item.tags.map((tag, index) => (
              // <View style={{backgroundColor: "red"}}>
              <Text
                style={{
                  fontSize: 7.57,
                  fontWeight: "700",
                  backgroundColor: "red",
                  color: white,
                  fontFamily: "Roboto",

                  paddingHorizontal: 5,
                  borderRadius: 7.57,
                  marginRight: 9.62,
                }}
                key={index + tag}
              >
                {tag}
              </Text>
              // </View>
            ))}
          </View>

          <Text
            style={{
              fontSize: 7.57,
              fontWeight: "400",
              color: white,
              fontFamily: "Roboto",
              // backgroundColor: "red",
              textAlign: "justify",
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Drawer/> */}
      <CustomHeader
        onHamburger={() => navigation.openDrawer()}
        onAccount={() => navigation.navigate("AccountDetails")}
      />

      <Text
        style={{
          fontSize: 32,
          color: white,
          fontWeight: "800",
          fontFamily: "Roboto",
          alignSelf: "flex-start",
          paddingLeft: 20,
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        Browse
      </Text>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          // backgroundColor: "red",
          paddingHorizontal: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomTextInput
          placeholder="Advanced Search"
          outerStyle={{ flex: 0.7 }}
        />
        <View style={{ flex: 0.28, marginLeft: 10, marginRight: 5 }}>
          <Dropdown
            selectedTextStyle={{
              color: white,
              fontSize: 10.34,
              fontFamily: "Roboto",
              fontWeight: "700",
            }}
            activeColor={black}
            containerStyle={{ backgroundColor: black }}
            itemTextStyle={{
              color: white,
              fontSize: 10.34,
              fontFamily: "Roboto",
              fontWeight: "700",
              backgroundColor: black
            }}
            itemContainerStyle={{ backgroundColor: black }}
            data={SORT_FILTERS}
            labelField="label"
            valueField="value"
            value={value}
            searchable={false}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onChange={(item) => {
              setValue(item.value);
              setOpen(false);
            }}
          />
        </View>
      </View>
      <FlatList
        style={{ width: "96%", marginTop: 20 }}
        renderItem={renderItem}
        row
        data={items}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    height: "100%",
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
