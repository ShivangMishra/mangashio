import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { black, blue, white } from "../colors";

export default function CustomButton(props) {
  const { buttonStyle, text, onPress, textStyle, disabled } = props;
  return (
    <TouchableOpacity
      style={{ ...style.button, ...buttonStyle, opacity: disabled ? 0.5 : 1 }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{...style.text, ...textStyle}}>{text}</Text>
      {props.arrow && <Image source={rightArrow} style={{marginLeft: 15}} />}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    width: 362,
    height: 34,
    flexDirection: "row",
    backgroundColor: blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    color: white,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Roboto",
  }
});
