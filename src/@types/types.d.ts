import { StackNavigationProp } from "@react-navigation/stack";

type LogoutStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

type LogoutNavigationProp = NativeStackNavigationProp<LogoutStackParamList>;

type UserType = {
  id: string;
};
