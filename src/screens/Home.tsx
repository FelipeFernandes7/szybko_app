import { Button, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../theme/theme";
import { Page } from "../components/home/Page";
import { Header } from "../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.wrap}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Page key={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
  },
  wrap: {
    gap: 10,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
