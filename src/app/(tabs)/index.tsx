import {
  ChevronRight,
  LogIn,
  Package,
  Sandwich,
  Trash2,
  User,
} from "lucide-react-native";
import { GreetingIcon } from "@/components/GreetingIcon";
import { getGreeting } from "@/helpers/greeting";
import { getRandomPhrase } from "@/helpers/randomPhrase";
import { Text, View } from "react-native";
import { router } from "expo-router";

export default function Home() {
  const greeting = getGreeting();
  const randomPhrase = getRandomPhrase();

  return (
    <View className="w-full flex-1 flex-col items-center justify-center">
      <View className="w-full flex-col px-4 my-5">
        <View className="w-full flex-row items-center justify-between ">
          <Text className="text-white text-xl font-bold">{greeting}</Text>
          <GreetingIcon />
        </View>
        <Text className="text-white">{randomPhrase}</Text>
      </View>

      <View className="w-full items-center px-4 gap-2">
        <View
          onTouchStart={() => router.push("/employees")}
          className="w-full flex-row items-center border border-neutral-800 justify-between rounded-2xl p-2"
        >
          <View className="w-11 h-11 items-center justify-center bg-neutral-800 rounded-xl">
            <User size={25} color={"#ffff"} />
          </View>
          <Text className="text-white font-bold">Funcionários</Text>
          <ChevronRight className="text-white" />
        </View>

        <View
          onTouchStart={() => router.push("/snack")}
          className="w-full flex-row items-center border border-neutral-800 justify-between rounded-2xl p-2"
        >
          <View className="w-11 h-11 items-center justify-center bg-neutral-800 rounded-xl">
            <Sandwich size={25} color={"#ffff"} />
          </View>
          <Text className="text-white font-bold">Lanche da tarde</Text>
          <ChevronRight className="text-white" />
        </View>

        <View
          onTouchStart={() => router.push("/order")}
          className="w-full flex-row items-center border border-neutral-800 justify-between rounded-2xl p-2"
        >
          <View className="w-11 h-11 items-center justify-center bg-neutral-800 rounded-xl">
            <Package size={25} color={"#ffff"} />
          </View>
          <Text className="text-white font-bold">Encomendas</Text>
          <ChevronRight className="text-white" />
        </View>

        <View
          onTouchStart={() => router.push("/day")}
          className="w-full flex-row items-center border border-neutral-800 justify-between rounded-2xl p-2"
        >
          <View className="w-11 h-11 items-center justify-center bg-neutral-800 rounded-xl">
            <Trash2 size={25} color={"#ffff"} />
          </View>
          <Text className="text-white font-bold">Tirar o lixo</Text>
          <ChevronRight className="text-white" />
        </View>

        <View
          onTouchStart={() => router.push("/signUp")}
          className="w-full flex-row items-center border border-neutral-800 justify-between rounded-2xl p-2"
        >
          <View className="w-11 h-11 items-center justify-center bg-neutral-800 rounded-xl">
            <LogIn size={25} color={"#ffff"} />
          </View>
          <Text className="text-white font-bold">Criar Conta</Text>
          <ChevronRight className="text-white" />
        </View>
      </View>
    </View>
  );
}
