import { z } from 'zod';
export type RegisterSchema = {
  name: string;
  email: string;
  password: string;
  jobType: string;
  confirmPassword: string;
};

export const registerSchema = z
  .object({
    name: z.string({ message: 'Campo vazio' }),
    jobType: z.string(),
    email: z
      .string()
      .email({
        message: 'Insira um email válido',
      })
      .min(1, 'Campo vazio!'),
    password: z
      .string({
        message: 'A senha deve conter no mínimo 6 caracteres',
      })
      .min(6),
    confirmPassword: z
      .string({
        message: 'A senha deve conter no mínimo 6 caracteres',
      })
      .min(6),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
