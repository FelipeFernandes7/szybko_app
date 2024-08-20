import { router } from "expo-router";
import { ChevronLeft, Snowflake } from "lucide-react-native";
import { View, Text } from "react-native";

type HeaderProps = {
  label: string;
};
export default function Header({ label }: HeaderProps) {
  return (
    <View className="w-full  flex-col justify-center items-center bg-violet-600 h-24 px-4 pt-4">
      <View className="w-full flex-row items-center justify-between">
        <ChevronLeft onPress={router.back} size={28} color={"#ffff"} />
        <Text className="text-white font-bold text-lg">{label}</Text>
        <Snowflake size={28} color={"#fff"} />
      </View>
    </View>
  );
}
