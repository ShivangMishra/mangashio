import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { black, gray, lightGray, white } from "../colors";
import { search, searchImg } from "../assets";
import { TouchableOpacity } from "react-native";

export default function CustomTextInput(props) {
  const {
    placeholder,
    label,
    search,
    inputStyle,
    onChangeText,
    containerStyle,
    imgSrc,
    value,
    inputProps,
    password,
  } = props;
  return (
    <View style={{marginBottom: label ? 12 : 0}}>
      {label &&  <Text style={styles.label}>{label}</Text>}
      <View style={{ ...styles.container, ...containerStyle }}>
        {imgSrc && <Image style={styles.image} source={imgSrc} />}

        <TextInput
          style={{ ...styles.input, ...inputStyle }}
          placeholder={placeholder}
          placeholderTextColor={black}
          onChangeText={onChangeText}
          value={value}
          {...inputProps}
          secureTextEntry={password}
        />

        {password && (
          <TouchableOpacity>
            <Image
              style={styles.arrowImage}
              //   source={require("../assets/AIJadu/SignUpPage/eyeclosedLogo.png")}
            />
          </TouchableOpacity>
        )}

        {search && (
          <TouchableOpacity>
            <Image style={styles.searchImg} source={searchImg} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    width: 362,
    height: 34,
    borderRadius: 4,
    backgroundColor: lightGray,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "4%",
  },
  image: {
    flex: 0.1,
  },
  input: {
    flex: 0.8,
    height: "100%",
    // marginHorizontal: 10,
  },
  label: {
    fontSize: 13.13,
    color: white,
    fontWeight: "400",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  searchImg: {},
});
