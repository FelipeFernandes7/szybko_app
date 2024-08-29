import { Text, View, StatusBar } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Schema } from '@/schemas/schema';

export default function SignIn() {
  const { signIn } = useAuth();
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Schema.SignIn.FormValue>({
    resolver: zodResolver(Schema.SignIn.schema),
  });
  async function onSubmit(formValues: Schema.SignIn.FormValue) {
    await signIn(formValues.email, formValues.password)
      .then(() => {
        router.push('/(tabs)');
        alert('Login efetuado com sucesso!');
      })
      .catch(err => {
        alert(`Usuário não encontrado | ${err.message} `);
        console.log(err);
      });
  }

  return (
    <View className="bg-violet-600 flex-1 w-full items-center">
      <StatusBar barStyle={'light-content'} />
      <View className="w-full flex-col items-center justify-center p-4 mt-24">
        <Text className="text-white text-3xl font-bold">Szybko</Text>
        <Text className="text-white text-xl text-center mt-2">
          Transformando a gestão diária em eficiência, rapidez e organização para a sua
          empresa.
        </Text>
      </View>
      <View className="w-full flex-col px-4 bg-neutral-900 rounded-t-3xl h-screen mt-16">
        <Text className="text-white text-3xl my-8 font-medium">Fazer Login</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              onChangeText={onChange}
              label="Nome de usuário"
              placeholder="Criar nome de usuário"
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
              placeholder="Inserir Senha"
              error={errors.password}
              isValid={!errors.password && !!watch('password')}
            />
          )}
        />
        <Button onPress={handleSubmit(onSubmit)} className="mt-5" label={'Entrar'} />
        <View className="w-full items-center flex-row justify-between my-5">
          <Link className="text-violet-600" href={'/signUp'}>
            Esqueci a senha
          </Link>
          <Link className="text-violet-600" href={'/signUp'}>
            Criar conta
          </Link>
        </View>
      </View>
    </View>
  );
}
