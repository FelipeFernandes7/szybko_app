import LinearGradient from "react-native-linear-gradient";
import { TabBarIcon } from "../components/Icon";
import { StyleSheet, View, Text } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import { Avatar } from "./Avatar";

type HeaderProps = {
  title?: string;
};
export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[COLORS.primaryIndigoHex, COLORS.primaryBlackHex]}
          style={styles.linearGradientBG}
        >
          <TabBarIcon name="menu" color={"#ffff"} size={FONTSIZE.size_16} />
        </LinearGradient>
      </View>
      <Text style={styles.headerText}>{title}</Text>
      <Avatar />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: "hidden",
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  linearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: "center",
    justifyContent: "center",
  },
});
