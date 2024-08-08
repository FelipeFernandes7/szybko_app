import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  [key: string]: undefined | object;
};

export type NavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
