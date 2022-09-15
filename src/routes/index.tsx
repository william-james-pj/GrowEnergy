import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { Logout } from "./logout";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {!user?.id ? <Logout /> : <View />}
      </NavigationContainer>
    </View>
  );
}
