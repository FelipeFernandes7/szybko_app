import { ScrollView, StatusBar, Text, View } from 'react-native';
import { useState } from 'react';
import { Button } from '@/components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/Input';
import { useForm, Controller } from 'react-hook-form';
import { registerSchema, RegisterSchema } from '@/schemas/registerSchema';
import { Select } from '@/components/Select';
import { Grid } from '@/components/Grid';
import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';

export default function SignUp() {
  const [value, setValue] = useState('');
  const { signUpWithEmailAndPassword } = useAuth();
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

    await signUpWithEmailAndPassword(name, email, password, jobType)
      .then(() => {
        alert('Conta criada com sucesso!');
        router.push('/signIn');
      })
      .catch(err => {
        alert(`Não foi possível criar conta, erro inesperado! ${err.message}`);
      });
  }

  return (
    <View className="bg-violet-600 flex-1 w-full items-center">
      <StatusBar barStyle={'light-content'} />
      <ScrollView className="w-full">
        <View className="w-full flex-col items-center justify-center p-4">
          <Text className="text-white text-3xl font-bold">Szybko</Text>
          <Text className="text-white text-xl text-center mt-2">
            Transformando a gestão diária em eficiência, rapidez e organização para a sua
            empresa.
          </Text>
        </View>

        <View className="w-full flex-col px-4 bg-neutral-900 rounded-t-3xl h-screen">
          <Text className="text-white text-3xl my-8 font-medium">Criar Conta</Text>
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

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                onChangeText={onChange}
                label="Senha"
                placeholder="Criar senha"
                error={errors.password}
                isValid={!errors.password && !!watch('password')}
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
                error={errors.confirmPassword}
                isValid={!errors.confirmPassword && !!watch('confirmPassword')}
              />
            )}
          />
          <Button onPress={handleSubmit(onSubmit)} className="mt-5" label={'Entrar'} />
        </View>
      </ScrollView>
    </View>
  );
}
