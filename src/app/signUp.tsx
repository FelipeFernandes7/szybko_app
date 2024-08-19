import { ScrollView, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/Input";
import { useForm, Controller } from "react-hook-form";
import { registerSchema, RegisterSchema } from "@/schemas/registerSchema";
import { useRegister } from "@/store/signIn";

export default function SignUp() {
  const lottieRef = useRef<LottieView>(null);
  const { handleCreateAccount } = useRegister();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  function onSubmit(formValues: RegisterSchema) {
    const { username, email, password } = formValues;
    try {
      if (password === formValues.confirmPassword) {
        handleCreateAccount(username, email, password);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View className="w-full flex-1 items-center mx-auto">
      <View className="w-full items-center justify-center bg-neutral-800 rounded-b-[50px]">
        <LottieView
          ref={lottieRef}
          style={{ width: 250, height: 250 }}
          source={require("@/lotties/mobile.json")}
          autoPlay
        />
      </View>
      <View className="w-full flex-row items-center justify-between my-4 px-4">
        <Text className="text-white font-bold text-2xl">Criar conta </Text>
        <Text className="text-fuchsia-600 font-bold text-2xl">SZYBKO</Text>
      </View>
      <ScrollView className="w-full">
        <View className="w-full flex-col items-center px-4 my-2">
          <View className="w-full flex-col my-2">
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange } }) => (
                <Input
                  onChangeText={onChange}
                  label="Nome de usuário"
                  placeholder="Criar nome de usuário"
                  error={errors.username}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange } }) => (
                <Input
                  onChangeText={onChange}
                  label="E-mail"
                  placeholder="example@gmail.com"
                  error={errors.email}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <Input
                  label="Senha"
                  onChangeText={onChange}
                  placeholder="Criar Senha"
                  secureTextEntry
                  error={errors.password}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange } }) => (
                <Input
                  onChangeText={onChange}
                  label="Confirmar senha"
                  placeholder="Confirmar nova senha"
                  secureTextEntry
                  error={errors.confirmPassword}
                />
              )}
            />
          </View>
          <Button onPress={handleSubmit(onSubmit)} label={"Criar conta"} />
        </View>
      </ScrollView>
    </View>
  );
}
