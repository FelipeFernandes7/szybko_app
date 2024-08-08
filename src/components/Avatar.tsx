import { Image, StyleSheet, View } from "react-native";
import { COLORS, SPACING } from "../theme/theme";
import { faker } from "@faker-js/faker";

export function Avatar() {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: faker.image.url() }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});
