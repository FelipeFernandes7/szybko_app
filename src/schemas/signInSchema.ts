import { z } from 'zod';

export type SignInSchema = {
  email: string;
  password: string;
};

export const signInSchema = z.object({
  email: z.string().email({ message: 'Insira um email válido' }),
  password: z.string(),
});
