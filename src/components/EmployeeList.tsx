import { ToggleLeft, ToggleRight } from "lucide-react-native";
import { View, Image, Text } from "react-native";

type EmployeeListProps = {
  avatarUrl: string;
  username: string;
  jobType: string;
  status: boolean;
};

export function EmployeeList({
  avatarUrl,
  username,
  jobType,
  status = false,
}: EmployeeListProps) {
  return (
    <View className="w-full flex-row border-b justify-between p-2">
      <View className="flex-row gap-4">
        <Image
          className="rounded-2xl"
          source={{ uri: avatarUrl }}
          height={55}
          width={55}
          resizeMode="cover"
        />

        <View className="flex-col">
          <Text className="text-white font-bold">{username}</Text>
          <Text className="text-slate-500 text-xs font-bold">{jobType}</Text>
        </View>
      </View>

      {status ? (
        <ToggleLeft size={18} color={"#10b981"} />
      ) : (
        <ToggleRight size={18} color={"#ef4444"} />
      )}
    </View>
  );
}
