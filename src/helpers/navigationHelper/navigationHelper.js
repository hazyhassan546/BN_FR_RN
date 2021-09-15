import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Toast from "react-native-toast-message";

/// Drawer screens
import Home from "../../screens/home";
import ContactUs from "../../screens/contactUs";
import Favorite from "../../screens/favourites";
import PrivacyPolicy from "../../screens/privacyPolicy";

//// Stack screens out of drawer.
import ByAlphabets from "../../screens/byAlphabets";
import ByReligion from "../../screens/byReligion";
import NameListing from "../../screens/nameListing";
import WalkThrough from "../../screens/walkthrough";
import Trending from "../../screens/trending";
import SideMenu from "./sideMenu";
import NameDetails from "../../screens/nameDetail";

// here is our app screen stack
const ApplicationStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// App extra screens stack

function AppStack() {
  return (
    <ApplicationStack.Navigator initialRouteName={"WalkThrough"}>
      <ApplicationStack.Screen
        headerMode="none"
        name="WalkThrough"
        component={WalkThrough}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="Favorite"
        component={Favorite}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="ContactUs"
        component={ContactUs}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="ByAlphabets"
        component={ByAlphabets}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="ByReligion"
        component={ByReligion}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="NameListing"
        component={NameListing}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="NameDetails"
        component={NameDetails}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="Trending"
        component={Trending}
        options={{ headerShown: false }}
      />
    </ApplicationStack.Navigator>
  );
}

// this function returns side menu of our app.
function DrawerMenu() {
  return (
    <Drawer.Navigator
      initialRouteName="DrawerHome"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={{
        backgroundColor: "#fff",
      }}
      drawerContent={(props) => {
        return <SideMenu {...props} />;
      }}
    >
      <Drawer.Screen
        name="DrawerHome"
        component={AppStack}
        headerMode="none"
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <DrawerMenu />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

export default Navigator;
