import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { black, gray, linkColor, white } from "../colors";
import Mangashio from "../components/Mangashio";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassowrd, setConfirmPassword] = useState("");
  return (
    <View style={styles.container}>
      <Mangashio />
      <View style={styles.innerContainer}>
        <Text style={styles.headingText}>Register</Text>
        <CustomTextInput
          label="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <CustomTextInput
          label="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <CustomTextInput
          label="Password"
          password={true}
          onChangeText={(text) => setPassword(text)}
        />
        <CustomTextInput
          label="Confirm Password"
          password={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <CustomButton text="Register" buttonStyle={{ marginTop: 65 }} />
        <TouchableOpacity>
          <Text style={styles.linkText}>Login page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 150,
    backgroundColor: black,
    alignItems: "center",
  },
  innerContainer: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: gray,
    width: 386,
    height: 503,
    borderRadius: 3,
  },
  headingText: {
    fontSize: 22.74,
    fontWeight: "700",
    color: white,
    marginTop: 15,
    marginBottom: 30,
  },
  linkText: {
    color: linkColor,
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "400",
    marginVertical: 4,
  },
});
