import { z } from 'zod';

export namespace Schema {
  export namespace SignIn {
    export type FormValue = {
      email: string;
      password: string;
    };

    export const schema = z.object({
      email: z.string().email({ message: 'Insira um email válido' }),
      password: z.string(),
    });
  }

  export namespace SignUp {
    export type FormValue = {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    export const schema = z
      .object({
        name: z.string({ message: 'Campo vazio' }),
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
  }
}
