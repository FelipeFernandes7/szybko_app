import { BadgeCheck } from "lucide-react-native";
import { View, Image, Text } from "react-native";

type EmployeeListProps = {
  avatarUrl: string;
  username: string;
  status: boolean;
};
export function EmployeeList({
  avatarUrl,
  username,
  status = false,
}: EmployeeListProps) {
  return (
    <View
      className={`w-full flex-row p-2 justify-between border-b border-slate-900 ${
        status ? "bg-transparent" : "bg-red-950 "
      }`}
    >
      <View className="flex-row gap-2">
        <Image
          className="rounded-[18px]"
          source={{ uri: avatarUrl }}
          resizeMode="cover"
          height={55}
          width={55}
        />

        <View className="flex-col">
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-white font-medium"
          >
            {username}
          </Text>
          <Text
            style={{ fontFamily: "Poppins" }}
            className={`${
              status ? "text-emerald-500" : "text-red-500"
            } text-[10px]`}
          >
            {status ? "Ativo" : "Inativo"}
          </Text>
        </View>
      </View>

      {status && (
        <BadgeCheck
          className="text-emerald-200"
          fill={"#10b981"}
          strokeWidth={1}
        />
      )}

      {!status && (
        <BadgeCheck className="text-red-200" fill={"#ef4444"} strokeWidth={1} />
      )}
    </View>
  );
}
