import { ToastAndroid } from "react-native";
import { create, useStore } from "zustand";
type UserAccount = {
  username: string;
  email: string;
  password: string;
};

type RegisterStore = {
  user: UserAccount[];
  handleCreateAccount: (
    username: string,
    email: string,
    password: string,
  ) => void;
};

const registerStore = create<RegisterStore>((set) => ({
  user: [],
  handleCreateAccount: (username, email, password) => {
    set((state) => ({
      user: [...state.user, { username, email, password }],
    }));
    ToastAndroid.show("Account created", 5000);
  },
}));

export const useRegister = () => useStore(registerStore);
