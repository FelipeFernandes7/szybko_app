import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#0C0F14",
  },
});
