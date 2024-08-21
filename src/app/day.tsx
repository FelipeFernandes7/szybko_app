import { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Rectangle } from "@/components/Rectangle";
import { useTrash } from "@/store/trash";
import { format } from "date-fns";
import { HeartHandshake } from "lucide-react-native";

export default function Day() {
  const { currentEmployee, upcomingDuties, setUpcomingDuties } = useTrash();

  useEffect(() => {
    setUpcomingDuties();
  }, []);

  return (
    <View className="w-full flex-1 bg-neutral-900 px-3">
      {currentEmployee && (
        <Rectangle>
          <Text className="text-white text-xl">
            Hoje é a vez de {currentEmployee?.name} tirar o lixo
          </Text>
          <View className="w-full flex-row gap-2 my-2">
            <Image
              source={{ uri: currentEmployee?.avatar }}
              className="rounded-2xl"
              height={55}
              width={55}
            />
            <View className="w-full flex-col">
              <Text className="text-white font-bold">
                {currentEmployee?.name}
              </Text>
              <Text className="text-slate-500 font-medium">
                {currentEmployee?.jobType}
              </Text>
            </View>
          </View>
        </Rectangle>
      )}
      {!currentEmployee && (
        <Rectangle>
          <View className="w-full flex-col items-center justify-center py-5">
            <HeartHandshake size={50} className="text-gray-500" />
            <Text className="text-3xl text-gray-500 text-center">
              Hoje não é dia de ninguém tirar lixo
            </Text>
          </View>
        </Rectangle>
      )}
      <Text className="text-white text-2xl">Próximos a tirar o lixo:</Text>
      <ScrollView className="my-2">
        {upcomingDuties.map(({ employee, date }) => (
          <View
            key={employee.id}
            className="w-full flex-row mt-5 justify-between"
          >
            <View className="flex-row gap-3">
              <Image
                source={{ uri: employee.avatar }}
                className="rounded-2xl"
                height={55}
                width={55}
              />
              <View className="flex-col">
                <Text className="text-white font-medium">{employee.name}</Text>
                <Text className="text-gray-500 font-medium">
                  {employee.jobType}
                </Text>
              </View>
            </View>

            <View className="flex-col">
              <Text className="text-gray-500 font-medium">
                {format(date, "dd/MM/yyyy")}
              </Text>
              <Text className="text-emerald-500">{"Próximo >>"}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
