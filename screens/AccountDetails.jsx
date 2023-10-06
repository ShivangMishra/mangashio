import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { black, gray, midGray, white } from "../colors";
import { ImageBackground } from "react-native";
import { coverPic, profilePic } from "../assets";
import { TouchableOpacity } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { ScrollView } from "react-native";

export default function AccountDetails() {
  const win = Dimensions.get("window");
  const ratio = win.width / 428;
  const ProfilePic = () => {
    return (
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Image
          source={profilePic}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 100 * ratio,
            width: 130,
            height: 130,
            borderRadius: 100,
          }}
        />
      </TouchableOpacity>
    );
  };

  const AccountSettings = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.title}>Account Settings</Text>
        <View style={styles.fieldsContainer}>
          <CustomTextInput
            label="Email"
            containerStyle={styles.textInput}
            inputStyle={{ color: white }}
          />
          <CustomTextInput
            label="Username"
            containerStyle={styles.textInput}
            inputStyle={{ color: white }}
          />
          <CustomButton
            text="Save"
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    );
  };

  const ChangePassword = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.title}>Change Password</Text>
        <View style={styles.fieldsContainer}>
          <CustomTextInput
            label="Password"
            containerStyle={styles.textInput}
            inputStyle={{ color: white }}
          />
          <CustomButton
            text="Save"
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    );
  };

  const Subscriptions = () => {
    return (
      <View style={[styles.section, { marginBottom: 10 }]}>
        <Text style={styles.title}>Subscriptions</Text>
        <View style={styles.subsContainer}>
          <View style={styles.sub}>
            <View style={{ width: "100%", alignItems: "center" }}>
              <Text style={styles.subTitle}>Free Plan</Text>
              <Text style={styles.subAdsText}>Ads every 3 chapters</Text>
            </View>
            <Text style={styles.subPriceText}>$0.00</Text>
          </View>

          <View style={styles.sub}>
            <View style={{ width: "100%", alignItems: "center" }}>
              <Text style={styles.subTitle}>Premium</Text>
              <Text style={styles.subAdsText}>Ad free.</Text>
            </View>
            <Text style={styles.subPriceText}>$16.99/m</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMode="cover"
        source={coverPic}
        style={{
          // width: "100%",
          width: win.width,
          height: 197 * ratio,
          resizeMode: "cover",
          width: "100%",
          opacity: 0.5,
          position: "absolute",
          top: 0,
        }}
      />
      <ProfilePic />
      <Text style={styles.username}>Gangmember420</Text>
      <View style={{ marginTop: 285, width: "100%" }}>
        <AccountSettings />
        <ChangePassword />
        <Subscriptions />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: black,
    // alignItems: "center",
  },
  username: {
    position: "absolute",
    top: 230,
    alignSelf: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  section: {
    width: "100%",
    backgroundColor: "white",
    // position: "absolute",
    // top: 300,
    paddingHorizontal: 20,
    marginBottom: 40,
    backgroundColor: black,
  },
  fieldsContainer: {
    marginTop: 20,
    paddingHorizontal: 12,
    width: "100%",
  },
  textInput: {
    backgroundColor: midGray,
    width: "100%",
    borderRadius: 4,
  },
  button: {
    width: 90,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "Roboto",
  },
  subsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sub: {
    width: 183,
    height: 171,
    borderRadius: 4,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.2,
    paddingTop: 10,
    paddingBottom: 15,
    justifyContent: "space-between",
  },
  subTitle: {
    fontSize: 25,
    color: white,
    fontFamily: "Roboto",
    fontWeight: "700",
    marginBottom: 14,
  },
  subAdsText: {
    fontSize: 13,
    color: white,
    fontFamily: "Roboto",
    fontWeight: "700",
    width: "50%",
    textAlign: "center",
  },
  subPriceText: {
    fontSize: 25,
    color: white,
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: 14,
  },
});
