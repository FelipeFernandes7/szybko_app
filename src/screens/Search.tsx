import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "../components/Icon";
import { BORDERRADIUS, COLORS, SPACING } from "../theme/theme";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [search, onChangeSearch] = useState("");
  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.inputContainerComponent}>
        <Icon name="search" size={25} color={"#94a3b8"} />
        <TextInput
          placeholderTextColor={"#94a3b8"}
          value={search}
          onChangeText={onChangeSearch}
          placeholder="Pesquisar"
          style={styles.input}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    paddingHorizontal: 14,
  },
  inputContainerComponent: {
    marginVertical: 15,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    marginHorizontal: "auto",
    paddingHorizontal: 10,
    height: 45,
    cursor: "pointer",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 5,
    width: "100%",
    color: "#ffff",
  },
});
