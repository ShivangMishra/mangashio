import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "./components/CustomTextInput";
import Register from "./screens/Register";
import SignIn from "./screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./screens/Navigation";
import AccountDetails from "./screens/AccountDetails";
import HomePage from "./screens/HomePage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./screens/CustomDrawer";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
              name="Navigation"
              component={Navigation}
              options={{ headerShown: false }}
            /> */}
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountDetails"
            component={AccountDetails}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Drawer"
            component={CustomDrawer}
            headerShown={false}
            options={{headerMode: 'none', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
