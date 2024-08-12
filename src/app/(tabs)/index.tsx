import { StatusBar, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "@/components/Button";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess((b) => !b);
    }, 2000);
  }

  return (
    <View className="flex-1 w-full items-center bg-[#0C0F14] px-8 justify-center">
      <StatusBar barStyle={"light-content"} />
      <Text className="text-white">Home</Text>
      <Button
        label="Enviar Formulário"
        isLoading={isLoading}
        success={success}
        onPress={handleSubmit}
      />
    </View>
  );
}
