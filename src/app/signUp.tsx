import { ScrollView, StatusBar, Text, ToastAndroid, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/Input';
import { useForm, Controller } from 'react-hook-form';
import { registerSchema, RegisterSchema } from '@/schemas/registerSchema';
import { Select } from '@/components/Select';
import { Grid } from '@/components/Grid';
import { useAuth } from '@/contexts/AuthContext';

export default function SignUp() {
  const [value, setValue] = useState('');
  const { signUpWithEmailAndPassword, success } = useAuth();
  const lottieRef = useRef<LottieView>(null);
  const successLabel = 'Conta Criada com sucesso!';
  const jobType = [
    {
      label: 'Desenvolvedor',
      value: 'developer',
    },
    {
      label: 'Suporte Técnico',
      value: ' technical_support',
    },
    {
      label: 'Gerente',
      value: 'manager',
    },
    {
      label: 'Supervisor',
      value: 'supervisor',
    },
    {
      label: 'Técnico',
      value: 'technical',
    },
  ];

  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  async function onSubmit(formValues: RegisterSchema) {
    const { name, email, password, jobType } = formValues;
    try {
      if (password === formValues.confirmPassword) {
        await signUpWithEmailAndPassword(name, email, password, jobType);
        reset();
      }
    } catch (error) {
      ToastAndroid.show(error as string, 5000);
      console.error(error);
    }
  }

  return (
    <View className="w-full flex-1 items-center mx-auto bg-neutral-900">
      <StatusBar barStyle={'light-content'} />
      <View className="w-full items-center justify-center bg-violet-600 rounded-b-[50px]">
        <LottieView
          ref={lottieRef}
          style={{ width: 220, height: 220 }}
          source={require('@/lotties/mobile.json')}
          autoPlay
        />
      </View>

      <View className="w-full flex-row items-center justify-between my-3 px-4">
        <Text className="text-white font-bold text-2xl">Criar conta </Text>
        <Text className="text-violet-600 font-bold text-2xl">SZYBKO</Text>
      </View>

      <ScrollView className="w-full">
        <Grid columns={1} className="w-full items-center justify-center px-4">
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <Input
                onChangeText={onChange}
                label="Nome de usuário"
                placeholder="Criar nome de usuário"
                error={errors.name}
                isValid={!errors.name && !!watch('name')}
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
                isValid={!errors.email && !!watch('email')}
              />
            )}
          />
          <View className="w-full flex-col mb-3">
            <Text className="font-medium text-white text-sm mb-1">Cargo</Text>
            <View className="w-full items-center justify-center border border-neutral-700 bg-neutral-900 rounded-2xl px-1 h-14">
              <Select
                placeholder="Selecionar cargo"
                mode="dropdown"
                value={value}
                options={jobType}
                className="w-full text-xs text-white"
                onChange={setValue}
              />
            </View>
          </View>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                label="Senha"
                onChangeText={onChange}
                placeholder="Criar Senha"
                secureTextEntry
                isValid={!errors.password && !!watch('password')}
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
                isValid={!errors.confirmPassword && !!watch('confirmPassword')}
                error={errors.confirmPassword}
              />
            )}
          />
          <Button
            success={success}
            successLabel={successLabel}
            onPress={handleSubmit(onSubmit)}
            label={'Criar conta'}
          />
        </Grid>
      </ScrollView>
    </View>
  );
}
