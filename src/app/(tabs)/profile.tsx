import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { faker } from "@faker-js/faker";

export default function Profile() {
  const user = {
    name: faker.person.fullName(),
    username: faker.internet.userName(),
    image: faker.image.avatarGitHub(),
    followers: faker.number.int({ min: 1000, max: 10000 }),
    following: faker.number.int({ min: 50, max: 500 }),
    posts: faker.number.int({ min: 10, max: 500 }),
  };
  return (
    <View className="flex-1 bg-neutral-900">
      <ImageBackground
        source={{ uri: faker.image.url() }}
        resizeMode="cover"
        className="items-center flex-col justify-center h-56 mt-4"
      >
        <Image
          source={{ uri: user.image }}
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        <Text className="text-white text-xl font-bold mt-4">{user.name}</Text>
        <Text className="text-gray-400">@{user.username}</Text>
      </ImageBackground>
      <View className="flex-row justify-around items-center mt-3">
        <View className="items-center">
          <Text className="text-white text-lg font-bold">{user.posts}</Text>
          <Text className="text-gray-400">Posts</Text>
        </View>

        <View className="items-center">
          <Text className="text-white text-lg font-bold">{user.following}</Text>
          <Text className="text-gray-400">Following</Text>
        </View>

        <View className="items-center">
          <Text className="text-white text-lg font-bold">{user.followers}</Text>
          <Text className="text-gray-400">Followers</Text>
        </View>
      </View>

      <View className="flex-row justify-center gap-2 mt-6">
        <TouchableOpacity className="bg-neutral-800 px-8 py-2 rounded-full">
          <Text className="text-white font-bold">Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-neutral-800 px-8 py-2 rounded-full">
          <Text className="text-white font-bold">Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
