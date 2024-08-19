import "react-native-reanimated";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
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
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
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
          name="signIn"
          options={{
            animation: "fade_from_bottom",
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
