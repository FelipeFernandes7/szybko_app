import {
  ChevronRight,
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
    <View className="w-full flex-1 justify-center items-center px-2">
      <View className="flex-col w-full px-4">
        <Text style={{ fontFamily: "Poppins" }} className="text-white text-2xl">
          SZYBKO
        </Text>
        <View className="w-full flex-row items-center gap-1">
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-white text-lg"
          >
            Bem vindo
          </Text>
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-indigo-500 text-lg"
          >
            Felipe Fernandes
          </Text>
        </View>
      </View>

      <View className="w-full bg-indigo-500 rounded-[32px] px-4 py-4 my-4 flex-col">
        <View className="flex-row justify-between px-2">
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-white font-medium text-2xl"
          >
            {greeting}
          </Text>
          <GreetingIcon />
        </View>

        <View className="flex-col mt-3 px-2 justify-end">
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-white font-medium"
          >
            {randomPhrase}
          </Text>
        </View>
      </View>

      <View className="w-full flex-row flex-wrap justify-center items-center gap-2 ">
        <View
          onTouchStart={() => router.push("/employees")}
          className="w-[189px] flex-col bg-neutral-800 px-4 rounded-[30px] p-3 h-32"
        >
          <View className="w-full flex-row justify-between items-center">
            <View className="bg-fuchsia-500 h-11 w-11 rounded-[18px] items-center justify-center">
              <User size={25} className="text-white" />
            </View>
            <ChevronRight className="text-white" />
          </View>

          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-white font-medium text-center mt-2"
          >
            Lista de funcionários
          </Text>
        </View>

        <View
          onTouchStart={() => router.push("/snack")}
          className="w-[189px] flex-col bg-neutral-800 px-4 rounded-[30px] p-3 h-32"
        >
          <View className="w-full flex-row justify-between items-center mb-4">
            <View className="bg-emerald-500 h-11 w-11 rounded-[18px] items-center justify-center">
              <Sandwich size={25} className="text-white" />
            </View>
            <ChevronRight className="text-white" />
          </View>
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-white font-medium text-center"
          >
            Lanche da tarde
          </Text>
        </View>

        <View
          onTouchStart={() => router.push("/day")}
          className="w-[189px] flex-col bg-neutral-800 px-4 rounded-[30px] p-3 h-32"
        >
          <View className="w-full flex-row justify-between items-center mb-4">
            <View className="bg-sky-500 h-11 w-11 rounded-[18px] items-center justify-center">
              <Trash2 size={25} className="text-white" />
            </View>
            <ChevronRight className="text-white" />
          </View>
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-white font-medium text-center"
          >
            Tirar lixo
          </Text>
        </View>

        <View
          onTouchStart={() => router.push("/order")}
          className="w-[189px] flex-col bg-neutral-800 px-4 rounded-[30px] p-3 h-32"
        >
          <View className="w-full flex-row justify-between items-center mb-4">
            <View className="bg-indigo-500 h-11 w-11 rounded-[18px] items-center justify-center">
              <Package size={25} className="text-white" />
            </View>
            <ChevronRight className="text-white" />
          </View>
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-white font-medium text-center"
          >
            Encomenda
          </Text>
        </View>
      </View>
    </View>
  );
}
