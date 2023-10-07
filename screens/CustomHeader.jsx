import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Mangashio from "../components/Mangashio";
import { View } from "react-native";
import { account, hamburger, logo, search, searchImg } from "../assets";
import { white } from "../colors";

export default function CustomHeader(props) {
    const { onSearch, onAccount, onHamburger } = props;
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onHamburger}>
        <Image source={hamburger} />
        </TouchableOpacity>

        <Image source={logo} style={styles.image} />
        <Text style={styles.text}>MangaShio</Text>        
      </View>

      <View style={styles.container}>
        
        <TouchableOpacity onPress={onSearch}>
        <Image source={searchImg} style={{marginRight: 11}}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={onAccount}>
        <Image source={account}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    // marginTop: 50,
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
