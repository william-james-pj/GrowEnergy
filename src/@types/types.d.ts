import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerScreenProps } from "@react-navigation/drawer";

type LogoutStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

type LogoutNavigationProp = NativeStackNavigationProp<LogoutStackParamList>;

type HomeParamList = {
  Home: undefined;
};

type HomeNavigationProp = NativeStackNavigationProp<HomeParamList>;

type CondominiumsParamList = {
  Condominiums: undefined;
};

type CondominiumsNavigationProp =
  NativeStackNavigationProp<CondominiumsParamList>;

type DrawerScreenProps = DrawerScreenProps;

type UserType = {
  id: string;
};
