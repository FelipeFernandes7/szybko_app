import { View, Text } from "react-native";
import { ReactNode } from "react";

type LayoutScreenProps = {
  children: ReactNode;
};
export function LayoutScreen({ children }: LayoutScreenProps) {
  return (
    <View className="w-full flex items-center">
      <Text>Hello World</Text>
    </View>
  );
}
