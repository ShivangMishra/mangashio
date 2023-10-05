import { Image, StyleSheet, Text } from "react-native";
import Mangashio from "../components/Mangashio";
import { View } from "react-native";
import { account, hamburger, logo, search } from "../assets";
import { white } from "../colors";

export default function CustomHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image source={hamburger} />
        <Image source={logo} style={styles.image} />
        <Text style={styles.text}>MangaShio</Text>        
      </View>

      <View style={styles.container}>
        <Image source={search} style={{marginRight: 11}}/>
        <Image source={account}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: 11,
    paddingHorizontal: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 11,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    fontWeight: "800",
    color: white,
    marginLeft: 8,
  },
});
