import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { Home } from "../../screens/Home";

import { HomeParamList } from "../../@types/types";

const Stack = createStackNavigator<HomeParamList>();

const screenOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: "transparent",
  },
};

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}
