import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import Header from "@/components/Header";
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: (props) => <Header label={props.options.title!} />,
      }}
      initialRouteName="index"
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen
        name="employees"
        options={{
          headerTintColor: "#FFFFFF",
          headerStyle: {
            backgroundColor: "#7c3aed",
          },

          animation: "slide_from_right",
          title: "Lista de funcionários",
        }}
      />
      <Stack.Screen
        name="order"
        options={{
          headerTintColor: "#FFFFFF",
          headerStyle: {
            backgroundColor: "#7c3aed",
          },
          animation: "slide_from_right",
          title: "Encomendas",
        }}
      />
      <Stack.Screen
        name="day"
        options={{
          headerTintColor: "#FFFFFF",
          headerStyle: {
            backgroundColor: "#7c3aed",
          },
          animation: "slide_from_right",
          title: "Tirar lixo",
        }}
      />
      <Stack.Screen
        name="snack"
        options={{
          headerTintColor: "#FFFFFF",
          headerStyle: {
            backgroundColor: "#7c3aed",
          },
          animation: "slide_from_right",
          title: "Lanche da tarde",
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          headerTintColor: "#FFFFFF",
          headerStyle: {
            backgroundColor: "#7c3aed",
          },
          animation: "fade_from_bottom",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
