import { StyleSheet, View } from "react-native";
import { black } from "../colors";
import { ImageBackground } from "react-native";
import { coverPic } from "../assets";

export default function AccountDetails() {
    return (<View style={styles.container}>
<ImageBackground source={coverPic}/>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: black,
        alignItems: "center",
    },
})