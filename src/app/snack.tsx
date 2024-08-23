import { Text, View } from 'react-native';
import React from 'react';
import { VoteCard } from '@/components/VoteCard';

export default function Snack() {
  return (
    <View className="w-full flex-1 flex-col bg-neutral-900">
      <View className="w-full flex-col px-2">
        <Text className="text-white font-medium text-xl">Votar no pedido</Text>
        <Text className="text-white text-sm">Escolha o lanche da tarde para votar.</Text>
      </View>
      <View className="w-full flex-col items-center justify-center my-4 px-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <VoteCard
            key={index}
            productName={'Sorvete'}
            voteQtd={10}
            hour={new Date()}
            price={10}
          />
        ))}
      </View>
    </View>
  );
}
