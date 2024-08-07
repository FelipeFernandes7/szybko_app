import { StyleSheet, Text, View } from "react-native";
import { BORDERRADIUS, COLORS } from "../../theme/theme";
import LinearGradient from "react-native-linear-gradient";
import { BgIcon } from "../BgIcon";

export function Page() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
      colors={[COLORS.primaryIndigoHex, COLORS.primaryBlackHex]}
    >
      <View>
        <Text style={styles.title}>Hello World</Text>
        <BgIcon
          name={"drop"}
          color={COLORS.primaryIndigoHex}
          size={15}
          BgColor={COLORS.primaryWhiteHex}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDERRADIUS.radius_25,
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderColor: COLORS.secondaryDarkGreyHex,
    width: "100%",
    height: 200,
    maxWidth: 190,
  },
  title: {
    fontSize: 14,
    color: "#ffffff",
  },
});
