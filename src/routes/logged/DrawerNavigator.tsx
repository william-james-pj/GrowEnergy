import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import { CustomDrawerContent } from "./CustomDrawerContent";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { Users } from "../../screens/Users";

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Users" component={Users} />
    </Drawer.Navigator>
  );
}
