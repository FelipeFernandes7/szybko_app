import { Image, ScrollView, Text, View } from 'react-native';
import { ChevronRight, HeartHandshake } from 'lucide-react-native';
import { Rectangle } from '@/components/Rectangle';
import { useEffect } from 'react';
import { useTrash } from '@/store/trash';
import { ptBR } from 'date-fns/locale';
import { format, isMonday, isSameYear, isTomorrow, isWednesday } from 'date-fns';

export default function Day() {
  const { currentEmployee, upcomingDuties, setUpcomingDuties, setTrashDuty } = useTrash();

  useEffect(() => {
    setTrashDuty();
    setUpcomingDuties();
  }, []);

  function takeOutTrashDayFormat(date: Date) {
    const today = new Date();

    if (
      (isMonday(today) && isTomorrow(date)) ||
      (isWednesday(today) && isTomorrow(date))
    ) {
      return 'amanhã';
    } else if (isSameYear(date, today)) {
      return format(date, 'MMM, dd', {
        locale: ptBR,
      });
    } else {
      return format(date, 'dd/MM/yyyy', {
        locale: ptBR,
      });
    }
  }

  return (
    <View className="w-full flex-1 bg-neutral-900 px-3">
      {currentEmployee && (
        <Rectangle>
          <View className="w-full flex-row items-center">
            <Text className="text-white text-xl">Hoje é a vez de</Text>
            <Text className="text-emerald-500 text-xl mx-2">
              {currentEmployee?.name.split(' ')[0]}
            </Text>
            <Text className="text-white text-xl">tirar o lixo</Text>
          </View>
          <View className="w-full flex-row gap-2 my-2">
            <Image
              source={{
                uri: currentEmployee?.avatar,
              }}
              className="rounded-2xl"
              height={55}
              width={55}
            />
            <View className="w-full flex-col">
              <Text className="text-white font-bold">{currentEmployee?.name}</Text>
              <Text className="text-slate-500 font-medium">
                {currentEmployee?.jobType}
              </Text>
            </View>
          </View>
        </Rectangle>
      )}

      {!currentEmployee && (
        <View className="w-full rounded-3xl flex-col my-4 p-2 px-4">
          <View className="w-full flex-col items-center justify-center py-2">
            <HeartHandshake size={50} className="text-gray-500" />
            <Text className="text-2xl text-gray-500 text-center">
              Hoje ninguém tirar lixo, aproveite a folga :)
            </Text>
          </View>
        </View>
      )}

      <Text className="text-white text-2xl">Próximos a tirar o lixo:</Text>
      <ScrollView className="my-2">
        {upcomingDuties.map(({ employee, date }) => (
          <View key={employee.id} className="w-full flex-row mt-5 justify-between">
            <View className="flex-row gap-3">
              <Image
                source={{
                  uri: employee.avatar,
                }}
                className="rounded-2xl"
                height={55}
                width={55}
              />
              <View className="flex-col">
                <Text className="text-white font-medium">{employee.name}</Text>
                <Text className="text-gray-500 font-medium">{employee.jobType}</Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <Text className="text-emerald-500 font-medium">
                {takeOutTrashDayFormat(date)}
              </Text>
              <ChevronRight size={25} className="text-emerald-500" />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
