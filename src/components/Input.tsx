import { Text, TextInput, TextInputProps, View } from 'react-native';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface InputProps extends TextInputProps {
  label?: string;
  isValid?: boolean;
  name?: string;
  error?: FieldError | undefined;
  register?: UseFormRegister<any>;
}

export function Input({ label, error, name, isValid, register, ...rest }: InputProps) {
  return (
    <View className="w-full flex-col mb-3">
      {!!label && (
        <Text className="font-medium text-white text-sm mb-1" aria-label={name}>
          {label}
        </Text>
      )}
      <View
        className={`w-full h-14 mt-1 ${
          error
            ? 'border-2 border-red-500'
            : isValid
              ? 'border-2 border-emerald-500'
              : 'border-none'
        } rounded-2xl items-center px-4 bg-transparent justify-between border border-neutral-700 bg-neutral-900`}
      >
        {register && name ? (
          <TextInput
            placeholderTextColor={'gray'}
            className="w-full h-14 outline-none bg-transparent text-white"
            {...register(name)}
            {...(label ? { id: name } : {})}
            {...rest}
          />
        ) : (
          <TextInput
            placeholderTextColor={'gray'}
            className="w-full h-14 outline-none bg-transparent text-white"
            {...(label ? { id: name } : {})}
            {...rest}
          />
        )}
      </View>
      {!!error && (
        <Text className="text-red-500 mt-2 font-medium text-xs">{error.message}</Text>
      )}
    </View>
  );
}
