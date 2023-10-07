import {
    DrawerContentScrollView,
    DrawerItem,
  } from "@react-navigation/drawer";
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
  import Mangashio from "./Mangashio";

export default function CustomDrawerContent(props) {
    return (<View style={{ flex: 1, backgroundColor: black }}>
        <DrawerContentScrollView {...props}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              paddingLeft: 10,
            }}
          >
            <Image
              source={logo}
              style={{
                width: 30,
                height: 30,
                marginLeft: 11,
              }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "800",
                color: white,
                marginLeft: 8,
              }}
            >
              MangaShio
            </Text>
          </View>
          <View style={{ width: "100%", paddingLeft: 20 }}>
            {/* <DrawerItemList {...props}/> */}
    
            {props.screens.map((screen) => (<DrawerItem
            key={screen.name}
                onPress={()=>props.navigation.navigate(screen.name)}
                label={() => (
                  <Text
                    style={{
                      color: white,
                      fontSize: 15,
                      fontWeight: "500",
                      fontFamily: "Roboto",
                    }}
                    
                  >
                    {screen.name}
                  </Text>
                )}
              />))}
                            {/* <FlatList } 
                renderItem={({item}) => }
            /> */}
          </View>
        </DrawerContentScrollView>
      </View>)
}