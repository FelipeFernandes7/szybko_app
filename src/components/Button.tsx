import { CircleCheckBig, CircleX } from "lucide-react-native";
import {
  Text,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

type ButtonProps = {
  label: string;
  successLabel?: string;
  errorLabel?: string;
  error?: boolean;
  success?: boolean;
  isLoading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export function Button({
  label,
  onPress,
  successLabel,
  errorLabel,
  error = false,
  success = false,
  isLoading = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={`w-full flex items-center justify-center h-12 rounded-2xl ${
        error ? "bg-red-500" : success ? "bg-emerald-500" : "bg-indigo-500"
      }`}
      onPress={onPress}
    >
      <View className="flex-row w-full items-center justify-center">
        {success && !isLoading && (
          <View className="flex-row items-center gap-2">
            <Text className="text-white font-medium">{successLabel}</Text>
            <CircleCheckBig className="text-white text-2xl" />
          </View>
        )}
        {error && !isLoading && (
          <View className="flex-row items-center gap-2">
            <Text className="text-white font-medium">{errorLabel}</Text>
            <CircleX className="text-white text-2xl" />
          </View>
        )}
        {!success && !error && !isLoading && (
          <Text className="text-white font-bold text-sm">{label}</Text>
        )}
        {isLoading && <ActivityIndicator size="small" color="#fff" />}
      </View>
    </TouchableOpacity>
  );
}
