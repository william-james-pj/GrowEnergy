import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { Logout } from "./logout";
import { DrawerNavigator } from "./logged/DrawerNavigator";

import { useAuth } from "../hooks/useAuth";
import { Loading } from "../components/Loading";

export function Routes() {
  const { user, isLoading } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {isLoading ? <Loading /> : !user?.id ? <Logout /> : <DrawerNavigator />}
      </NavigationContainer>
    </View>
  );
}
