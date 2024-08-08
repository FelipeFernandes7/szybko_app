import { StyleSheet, View } from "react-native";
import { COLORS } from "../theme/theme";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header title="Felipe Fernandes" />
      <View style={styles.wrap}></View>
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
