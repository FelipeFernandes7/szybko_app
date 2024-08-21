import {
  ChevronRight,
  LeafyGreen,
  PackageOpen,
  Users,
  UtensilsCrossed,
} from "lucide-react-native";
import { GreetingIcon } from "@/components/GreetingIcon";
import { getRandomPhrase } from "@/helpers/randomPhrase";
import { getGreeting } from "@/helpers/greeting";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { router } from "expo-router";
import { Grid } from "@/components/Grid";

export default function Home() {
  const greeting = getGreeting();
  const randomPhrase = getRandomPhrase();

  return (
    <View className="w-full flex-1 flex-col items-center bg-neutral-900">
      <StatusBar style="light" backgroundColor="#7c3aed" translucent={false} />
      <View className="w-full flex-col px-4 bg-violet-600 justify-center rounded-b-[50px] p-4">
        <View className="w-full flex-row items-center justify-between px-4 mt-5">
          <Text className="text-white text-2xl font-bold">{greeting}</Text>
          <GreetingIcon />
        </View>
        <Text className="text-slate-300 ml-4 text-lg mt-3">{randomPhrase}</Text>
      </View>
      <Grid className="w-full mt-5 items-center justify-center" columns={2}>
        <View
          onTouchStart={() => router.push("/employees")}
          className="w-full bg-neutral-900 border border-neutral-600 h-44 rounded-3xl p-3 flex-col justify-between"
        >
          <View className="h-14 w-14 rounded-[22px] bg-violet-600 items-center justify-center">
            <Users size={25} color={"#ffff"} />
          </View>
          <View className="w-full flex-row justify-between items-center">
            <Text className="text-white font-medium text-sm">Funcionários</Text>
            <ChevronRight size={28} color={"#fff"} />
          </View>
        </View>

        <View
          onTouchStart={() => router.push("/snack")}
          className="w-full bg-neutral-900 border border-neutral-600 h-44 rounded-3xl p-3 flex-col justify-between"
        >
          <View className="h-14 w-14 rounded-[22px] bg-violet-600 items-center justify-center">
            <UtensilsCrossed size={25} color={"#ffff"} />
          </View>
          <View className="w-full flex-row justify-between items-center">
            <Text className="text-white font-medium text-sm">Lanchinho</Text>
            <ChevronRight size={28} color={"#fff"} />
          </View>
        </View>

        <View
          onTouchStart={() => router.push("/day")}
          className="w-full bg-neutral-900 border border-neutral-600 h-44 rounded-3xl p-3 flex-col justify-between"
        >
          <View className="h-14 w-14 rounded-[22px] bg-violet-600 items-center justify-center">
            <LeafyGreen size={25} color={"#ffff"} />
          </View>
          <View className="w-full flex-row justify-between items-center">
            <Text className="text-white font-medium text-sm">Lixo</Text>
            <ChevronRight size={28} color={"#fff"} />
          </View>
        </View>

        <View
          onTouchStart={() => router.push("/order")}
          className="w-full bg-neutral-900 border border-neutral-600 h-44 rounded-3xl p-3 flex-col justify-between"
        >
          <View className="h-14 w-14 rounded-[22px] bg-violet-600 items-center justify-center">
            <PackageOpen size={25} color={"#ffff"} />
          </View>
          <View className="w-full flex-row justify-between items-center">
            <Text className="text-white font-medium text-sm">Encomendas</Text>
            <ChevronRight size={28} color={"#fff"} />
          </View>
        </View>
      </Grid>
    </View>
  );
}
