import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerScreenProps } from "@react-navigation/drawer";

type LogoutStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

type LogoutNavigationProp = NativeStackNavigationProp<LogoutStackParamList>;

type HomeParamList = {
  Home: undefined;
  EnergySaving: undefined;
};

type HomeNavigationProp = NativeStackNavigationProp<HomeParamList>;

type CondominiumsParamList = {
  Condominiums: undefined;
  SeeCondominium: undefined;
  SeeDevice: undefined;
};

type CondominiumsNavigationProp =
  NativeStackNavigationProp<CondominiumsParamList>;

type DrawerScreenProps = DrawerScreenProps;

type UsersParamList = {
  Users: undefined;
  AddUser: undefined;
};

type UsersNavigationProp = NativeStackNavigationProp<UsersParamList>;

type UserType = {
  id: string;
  idToken: string;
  displayName: string;
  email: string;
  role: string;
  disabled: boolean;
};

type NewUserType = {
  displayName: string;
  email: string;
  password: string;
  role: string;
  disabled: boolean;
};

type GenerationByMonthType = {
  generation: number;
  month: number;
  year: number;
};

type CondominiumsType = {
  id: string;
  name: string;
  address: string;
  stations: DevicesType[];
};

type DevicesType = {
  id: string;
  name: string;
  condominium: string;
};

type GenerationType = {
  power: string;
  station: string;
  time: Date;
};

type UserAccessType = {
  condominium: string;
  user: string;
};
