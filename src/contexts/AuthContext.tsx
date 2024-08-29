import { auth, database } from '@/firebase/db';
import { ref, set } from 'firebase/database';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { parseUser } from '@/helpers/parseUser';

type User = {
  uid: string;
  name: string | null;
  email: string | null;
  jobType: string | null;
  avatar: string | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | null;
  signed: boolean;
  loadingAuth: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUpWithEmailAndPassword: (
    displayName: string,
    email: string,
    password: string,
    jobType?: string,
  ) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const signed = !!user;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        setUser({
          uid,
          email,
          name: displayName,
          avatar: photoURL,
          jobType: null,
        });
      } else {
        setUser(null);
      }
    });
    setLoadingAuth(false);
    return () => unsubscribe();
  }, []);

  async function signIn(email: string, password: string) {
    const user = await signInWithEmailAndPassword(auth, email, password);
    const parsedUser = parseUser(user);
    setUser(parsedUser);
  }

  async function signUpWithEmailAndPassword(
    displayName: string,
    email: string,
    password: string,
    jobType?: string,
  ) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    const userRef = ref(database, `users/${user.user.uid}`);

    await set(userRef, {
      uid: user.user.uid,
      email,
      displayName,
      jobType,
    });

    const parsedUser = {
      uid: user.user.uid,
      name: displayName,
      avatar: null,
      email,
      jobType: null,
    };
    setUser(parsedUser);
    setLoadingAuth(false);
  }

  async function signOut() {
    await auth.signOut();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signed,
        loadingAuth,
        signOut,
        signIn,
        signUpWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
