import { SearchIcon } from "lucide-react-native";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <View className="w-full flex-1 items-center bg-neutral-900 px-4">
      <View className="w-full flex-row items-center justify-between bg-neutral-800 h-12 px-3 rounded-2xl mt-10">
        <TextInput
          value={search}
          onChangeText={setSearch}
          className="h-12 text-white w-[322px]"
          placeholder="Pesquisar"
          placeholderTextColor={"gray"}
        />
        <SearchIcon size={28} color={"gray"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
