import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BellRing, HomeIcon, Search } from "lucide-react-native";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView intensity={15} style={styles.BlurViewStyles} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon size={25} color={focused ? "#6366f1" : "#52555A"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <Search size={25} color={focused ? "#6366f1" : "#52555A"} />
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
    backgroundColor: "rgba(12,15,20,0.5)",
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
  BlurViewStyles: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
