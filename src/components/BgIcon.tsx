import { StyleSheet, View } from "react-native";

import { BORDERRADIUS, SPACING } from "../theme/theme";
import { IconName, TabBarIcon } from "./Icon";

type BgIconProps = {
  name: IconName;
  color: string;
  size: number;
  BgColor: string;
};

export function BgIcon({ name, color, size, BgColor }: BgIconProps) {
  return (
    <View style={[styles.IconBG, { backgroundColor: BgColor }]}>
      <TabBarIcon name={name} color={color} size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  IconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_8,
  },
});
