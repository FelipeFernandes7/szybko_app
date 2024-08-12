import { StatusBar, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 w-full items-center bg-[#0C0F14]">
      <StatusBar barStyle={"light-content"} />
      <Text>Home</Text>
    </View>
  );
}
