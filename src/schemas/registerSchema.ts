import { z } from "zod";
export type RegisterSchema = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerSchema = z
  .object({
    username: z.string({ message: "Campo vazio" }),
    email: z
      .string()
      .email({
        message: "Insira um email válido",
      })
      .min(1, "Campo vazio!"),
    password: z
      .string({
        message: "A senha deve conter no mínimo 6 caracteres",
      })
      .min(6),
    confirmPassword: z
      .string({
        message: "A senha deve conter no mínimo 6 caracteres",
      })
      .min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
