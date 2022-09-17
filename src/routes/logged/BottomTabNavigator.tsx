import React from "react";

import { StyleSheet, View } from "react-native";
import { useTheme } from "styled-components";

import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import { IconTabBar } from "./IconTabBar";

import { HomeStackNavigator } from "./HomeStackNavigator";
import { Dashboard } from "../../screens/Dashboard";
import { CondominiumsStackNavigator } from "./CondominiumsStackNavigator";

export function BottomTabNavigator() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    navigatorContainer: {
      backgroundColor: `transparent`,
      height: 150,

      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    navigator: {
      position: "absolute",
      borderTopWidth: 0,
      backgroundColor: "transparent",
      elevation: 30,
      height: 60,
    },
  });

  return (
    <Tab.Navigator
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.navigator,
        tabBarItemStyle: {
          backgroundColor: `${theme.colors.card}`,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="Home" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="Dashboard" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="CondominiumsStack"
        component={CondominiumsStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="Condominiums" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
