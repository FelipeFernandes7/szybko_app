import { router } from "expo-router";
import { ChevronLeft, Snowflake } from "lucide-react-native";
import { View, Text } from "react-native";

type HeaderProps = {
  label: string;
};

export default function Header({ label }: HeaderProps) {
  return (
    <View className="w-full flex-col justify-center items-center bg-violet-600 h-24 px-4">
      <View className="w-full flex-row items-center justify-between">
        <View className="p-3 bg-violet-500 rounded-2xl items-center justify-center">
          <ChevronLeft onPress={router.back} size={28} color={"#ffff"} />
        </View>
        <Text className="text-white font-medium text-xl items-center justify-center">
          {label}
        </Text>
        <View className="p-3 bg-violet-500 rounded-2xl">
          <Snowflake size={28} color={"#fff"} />
        </View>
      </View>
    </View>
  );
}
