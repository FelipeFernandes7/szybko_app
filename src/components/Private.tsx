import { useAuth } from '@/contexts/AuthContext';
import { Redirect } from 'expo-router';
import { ReactNode } from 'react';
import { ActivityIndicator, View } from 'react-native';

type PrivateProps = {
  children: ReactNode;
};

export function Private({ children }: PrivateProps) {
  const { loadingAuth, signed } = useAuth();

  if (loadingAuth) {
    return (
      <View className="bg-neutral-900 w-full flex items-center justify-center h-screen absolute top-0 bottom-0 left-0 right-0">
        <ActivityIndicator size="large" color="#7c3aed" />
      </View>
    );
  }

  if (!signed) {
    return <Redirect href={'/signIn'} />;
  }

  return children;
}
