import { ScrollView, StatusBar, Text, ToastAndroid, View } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/Input";
import { useForm, Controller } from "react-hook-form";
import { registerSchema, RegisterSchema } from "@/schemas/registerSchema";
import { useAuth } from "@/store/auth";

export default function SignUp() {
  const lottieRef = useRef<LottieView>(null);
  const { singUp, success, successLabel } = useAuth();

  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  async function onSubmit(formValues: RegisterSchema) {
    const { username, email, password } = formValues;
    try {
      if (password === formValues.confirmPassword) {
        await singUp(username, email, password);
        reset();
      }
    } catch (error) {
      ToastAndroid.show(error as string, 5000);
      console.error(error);
    }
  }

  return (
    <View className="w-full flex-1 items-center mx-auto bg-black">
      <StatusBar barStyle={"light-content"} />
      <View className="w-full items-center justify-center bg-violet-600 rounded-b-[50px]">
        <LottieView
          ref={lottieRef}
          style={{ width: 250, height: 250 }}
          source={require("@/lotties/mobile.json")}
          autoPlay
        />
      </View>

      <View className="w-full flex-row items-center justify-between my-3 px-4">
        <Text className="text-white font-bold text-2xl">Criar conta </Text>
        <Text className="text-violet-600 font-bold text-2xl">SZYBKO</Text>
      </View>

      <ScrollView className="w-full">
        <View className="w-full flex-col items-center px-4 ">
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
                  isValid={!errors.username && !!watch("username")}
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
                  isValid={!errors.email && !!watch("email")}
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
                  isValid={!errors.password && !!watch("password")}
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
                  isValid={
                    !errors.confirmPassword && !!watch("confirmPassword")
                  }
                  error={errors.confirmPassword}
                />
              )}
            />
          </View>
          <Button
            success={success}
            successLabel={successLabel}
            onPress={handleSubmit(onSubmit)}
            label={"Criar conta"}
          />
        </View>
      </ScrollView>
    </View>
  );
}
