import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { Users } from "../../screens/Users";
import { AddUser } from "../../screens/AddUser";

import { UsersParamList } from "../../@types/types";

const Stack = createStackNavigator<UsersParamList>();

const screenOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: "transparent",
  },
};

export function UsersStackNavigator() {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Users"
        component={Users}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AddUser"
        component={AddUser}
      />
    </Stack.Navigator>
  );
}
