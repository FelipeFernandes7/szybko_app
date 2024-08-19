import { Tabs } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";
import { BellRing, HomeIcon, Search } from "lucide-react-native";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <Search size={25} color={focused ? "#6366f1" : "#52555A"} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon size={25} color={focused ? "#6366f1" : "#52555A"} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ focused }) => (
            <BellRing size={25} color={focused ? "#6366f1" : "#52555A"} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: "#000",
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
});
