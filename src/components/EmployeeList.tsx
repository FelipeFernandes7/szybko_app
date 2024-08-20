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
    <View className="w-full flex-row items-center justify-between px-2 my-1">
      <View className="flex-row items-center">
        <Image
          className="rounded-full"
          source={{ uri: avatarUrl }}
          resizeMode="cover"
          height={60}
          width={60}
        />
        <View className="flex-col ml-2">
          <Text className="text-white font-bold">{username}</Text>
          <Text className="text-slate-500">{jobType}</Text>
        </View>
      </View>
      <View
        className={`${
          status ? "bg-emerald-500" : "bg-neutral-800"
        } p-1 px-3 rounded-full items-center justify-center`}
      >
        <Text className="text-white">{status ? "Ativo" : "Inativo"}</Text>
      </View>
    </View>
  );
}
