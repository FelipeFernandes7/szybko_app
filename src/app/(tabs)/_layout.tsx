import { Private } from '@/components/Private';
import { Tabs } from 'expo-router';

import { BellRing, HomeIcon, Search, User } from 'lucide-react-native';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Private>
      <Tabs
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <HomeIcon size={25} color={focused ? '#7c3aed' : '#52555A'} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ focused }) => (
              <Search size={25} color={focused ? '#7c3aed' : '#52555A'} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ focused }) => (
              <BellRing size={25} color={focused ? '#7c3aed' : '#52555A'} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <User size={25} color={focused ? '#7c3aed' : '#52555A'} />
            ),
          }}
        />
      </Tabs>
    </Private>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: '#000',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
});
