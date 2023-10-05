import { Image, View } from "react-native";
import { StyleSheet, Text } from "react-native";
import { logo } from "../assets";
import { white } from "../colors";

export default function Mangashio() {
    return (
        <View style={styles.container}>
            <Image source={logo}/>
            <Text style={styles.text}>Mangashio</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
    },
    text: {
        fontSize: 24.36,
        fontWeight: "800",
        color: white,
        marginLeft: 10,
    }
});