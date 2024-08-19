import { ToastAndroid } from "react-native";
import { create, useStore } from "zustand";

type UserAccount = {
  username: string;
  email: string;
  password: string;
};

type AuthStore = {
  success: boolean;
  successLabel: string;
  user: UserAccount[];
  singUp: (username: string, email: string, password: string) => void;
  singIn: (email: string, password: string) => void;
};

const authStore = create<AuthStore>((set) => ({
  user: [],
  success: false,
  successLabel: "",

  singUp(username, email, password) {
    set((state) => ({
      user: [...state.user, { username, email, password }],
      success: true,
      successLabel: "Account created successfully",
    }));
    ToastAndroid.show("Account created", 5000);
  },

  singIn(email, password) {
    set((state) => ({
      success: true,
      successLabel: "Logged in successfully",
    }));
  },
}));

export const useAuth = () => useStore(authStore);
