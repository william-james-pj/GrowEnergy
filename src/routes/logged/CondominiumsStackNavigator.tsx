import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { Condominiums } from "../../screens/Condominiums";

import { CondominiumsParamList } from "../../@types/types";

const Stack = createStackNavigator<CondominiumsParamList>();

const screenOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: "transparent",
  },
};

export function CondominiumsStackNavigator() {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Condominiums"
        component={Condominiums}
      />
    </Stack.Navigator>
  );
}
