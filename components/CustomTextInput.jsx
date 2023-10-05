import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { black, gray, lightGray, white } from "../colors";

export default function CustomTextInput(props) {
  const {placeholder, label, inputStyle, onChangeText, containerStyle, imgSrc, value, inputProps, password} = props;
  return (
   <View style={styles.outerContainer}>
       <Text style={styles.label}>
        {label}
      </Text>
     <View style={{ ...styles.container, ...containerStyle }}>
     {imgSrc && <Image
        style={styles.image}
        source={imgSrc}
      />}

      <TextInput
        style={{...styles.input, ...inputStyle}}
        placeholder={placeholder}
        placeholderTextColor={black}
        onChangeText={onChangeText}
        value={value}
        {...inputProps}
        secureTextEntry={password}
      />

      {password && (
        <Image
          style={styles.arrowImage}
        //   source={require("../assets/AIJadu/SignUpPage/eyeclosedLogo.png")}
        />
      )}
    </View> 
   </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    // backgroundColor: "red",
    marginBottom: 12,
  },
  container: {
    width: 362,
    height: 34,
    borderRadius: 4,
    backgroundColor: lightGray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
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
});
