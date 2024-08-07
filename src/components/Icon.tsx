import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import { IconProps } from "react-native-vector-icons/Icon";

import icoMoonConfig from "../../selection.json";

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);

export type IconName =
  | "close"
  | "add"
  | "bean"
  | "bell"
  | "cart"
  | "drop"
  | "home"
  | "like"
  | "location"
  | "menu"
  | "minus"
  | "search"
  | "star";

type TabBarIconProps = {
  name: IconName;
  color?: string;
  size?: number;
} & IconProps;

export function TabBarIcon({
  name,
  color,
  size = 25,
  ...rest
}: TabBarIconProps) {
  return <CustomIcon name={name} size={size} color={color} {...rest} />;
}
