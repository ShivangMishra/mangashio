import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { black, gray, linkColor, white } from "../colors";
import Mangashio from "../components/Mangashio";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function Register({ navigation}) {
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
          outerStyle={{ width: "100%" }}
        />
        <CustomTextInput
          label="Email"
          onChangeText={(text) => setEmail(text)}
          outerStyle={{ width: "100%" }}
        />
        <CustomTextInput
          label="Password"
          password={true}
          onChangeText={(text) => setPassword(text)}
          outerStyle={{ width: "100%" }}
        />
        <CustomTextInput
          label="Confirm Password"
          password={true}
          onChangeText={(text) => setConfirmPassword(text)}
          outerStyle={{ width: "100%" }}
        />

        <View
          style={{
            width: "100%",
            alignItems: "center",
            // alignSelf: "flex-end",
            // position: "relative",
            // bottom: 0,
            flex: 0.9,
            justifyContent: "flex-end",
          }}
        >
          <CustomButton text="Register" buttonStyle={{ width: "100%" }} 
            onPress={()=>navigation.navigate("Drawer")}
          />
          <TouchableOpacity onPress={()=>navigation.navigate("SignIn")}>
            <Text style={styles.linkText}>Login page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: "38%",
    backgroundColor: black,
    alignItems: "center",
  },
  innerContainer: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: gray,
    width: "90%",
    paddingHorizontal: "2.5%",
    height: "65%",
    borderRadius: 3,
  },
  headingText: {
    fontSize: 22.74,
    fontWeight: "700",
    color: white,
    marginTop: 15,
    marginBottom: "5%",
  },
  linkText: {
    color: linkColor,
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "400",
    marginVertical: 4,
  },
});
