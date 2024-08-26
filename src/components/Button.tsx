import {
  Text,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = {
  label: string;
  isLoading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
} & TouchableOpacityProps;

export function Button({
  label,
  onPress,

  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      className="w-full flex items-center justify-center h-14 rounded-2xl bg-violet-600"
      onPress={onPress}
    >
      <View className="flex-row w-full items-center justify-center">
        {!isLoading && <Text className="text-white font-bold text-[17px]">{label}</Text>}
        {isLoading && <ActivityIndicator size="small" color="#fff" />}
      </View>
    </TouchableOpacity>
  );
}
