import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import HomePage from "./HomePage";
import Browse from "./Browse";
import Constants from "expo-constants";
import Library from "./Library";
import AccountDetails from "./AccountDetails";
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { coverPic, logo, profilePic } from "../assets";
import { View } from "react-native";
import { black, blue, lightGray, white } from "../colors";
import Mangashio from "../components/Mangashio";
import CustomDrawerContent from "../components/CustomDrawerContent";

export default function CustomDrawer(props) {
  const Drawer = createDrawerNavigator();

  const screens = [{
    name: "Home",
    component: HomePage,
  }, {
    name: "Browse",
    component: Browse,
  }, {
    name: "Library",
    component: Library,
  }, {
    name: "Settings",
    component: AccountDetails,
  }]
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
         <CustomDrawerContent {...props} screens={screens} />
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Browse"
        component={Browse}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={AccountDetails}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
