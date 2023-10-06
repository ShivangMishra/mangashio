import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { black, blue, checkboxColor, gray, linkColor, white } from "../colors";
import Mangashio from "../components/Mangashio";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import Checkbox from "expo-checkbox";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <View style={styles.container}>
      <Mangashio />
      <View style={styles.innerContainer}>
        <Text style={styles.headingText}>Sign in</Text>
        <CustomTextInput
          label="Username/email"
          onChangeText={(text) => setUsername(text)}
          outerStyle={{ width: "100%" }}
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: -5,
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <Text style={styles.newUserText}>New user?</Text>
          <TouchableOpacity>
            <Text style={[styles.newUserText, { color: linkColor }]}>
              {" Register here"}
            </Text>
          </TouchableOpacity>
        </View>
        <CustomTextInput
          label="Password"
          password={true}
          onChangeText={(text) => setPassword(text)}
          outerStyle={{ width: "100%" }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-start",
              alignItems: "center",
            }}
          >
            <Checkbox
              value={rememberMe}
              onValueChange={() => setRememberMe(!rememberMe)}
              color={true ? checkboxColor : undefined}
              style={{
                width: 12,
                height: 12,
                borderColor: blue,
                borderWidth: 1,
                marginRight: 10,
              }}
            />
            <Text style={styles.newUserText}>Remember me</Text>
          </View>

          <TouchableOpacity>
            <Text style={[styles.newUserText, { color: linkColor }]}>
              {"Forgot password?"}
            </Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          text="Log in"
          buttonStyle={{ width: "100%", marginTop: 35 }}
        />
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
    paddingHorizontal: 12,
    alignItems: "center",
    backgroundColor: gray,
    width: "90%",
    height: 400,
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
  newUserText: {
    color: white,
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
});
