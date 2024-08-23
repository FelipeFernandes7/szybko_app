import { formatPrice } from '@/helpers/formatPrice';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { IceCreamBowl } from 'lucide-react-native';
import { View, Text, TouchableOpacity } from 'react-native';

type VoteCardProps = {
  productName: string;
  voteQtd: number;
  price: number;
  hour: Date;
};

export function VoteCard({ productName, voteQtd, price, hour }: VoteCardProps) {
  return (
    <View className="w-full flex-row items-center p-3 bg-neutral-800 mb-2 rounded-xl justify-between">
      <View className="flex-row">
        <View className="h-11 w-11 bg-neutral-900 rounded-2xl items-center justify-center">
          <IceCreamBowl size={25} color={'gray'} />
        </View>
        <View className="flex-col items-center">
          <Text className="text-white font-bold text-sm ml-2">{productName}</Text>
          <Text className="text-gray-400 text-xs">
            {format(new Date(hour), 'p', { locale: ptBR })}
          </Text>
        </View>
      </View>
      <View className="flex-col items-end">
        <View className="flex-row items-center mb-2">
          <Text className="text-emerald-500 font-bold text-xs">{formatPrice(price)}</Text>
          <Text className="text-white font-bold text-xs ml-3">{voteQtd} Votos</Text>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity className="bg-violet-600 p-1 rounded-full px-2">
            <Text className="text-white text-xs">Votar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-transparent">
            <Text className="text-red-500 text-xs ml-3">Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
