import { StatusBar, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "@/components/Button";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError((b) => !b);
      setSuccess(false);
    }, 2000);
  }

  return (
    <View className="flex-1 w-full items-center bg-[#0C0F14] px-8 justify-center">
      <StatusBar barStyle={"light-content"} />
      <Text className="text-white">Home</Text>
      <Button
        label="Finalizar pagamento"
        successLabel="Pagamento Efetuado"
        errorLabel="Falha ao Enviar"
        isLoading={isLoading}
        error={error}
        success={success}
        onPress={handleSubmit}
      />
    </View>
  );
}
