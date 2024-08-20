import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require("../../assets/fonts/app_icons.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen
        name="employees"
        options={{
          animation: "slide_from_right",
          title: "Lista de funcionários",
        }}
      />
      <Stack.Screen
        name="order"
        options={{
          animation: "slide_from_right",
          title: "Encomendas",
        }}
      />
      <Stack.Screen
        name="day"
        options={{
          animation: "slide_from_right",
          title: "Tirar lixo",
        }}
      />
      <Stack.Screen
        name="snack"
        options={{
          animation: "slide_from_right",
          title: "Lanche da tarde",
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          animation: "fade_from_bottom",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
