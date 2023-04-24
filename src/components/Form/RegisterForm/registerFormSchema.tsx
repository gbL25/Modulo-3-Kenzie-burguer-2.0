import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(1, { message: 'Nome é obrigatório' }),
    email: z.string().min(1, { message: 'E-mail é obrigatório' }),
    password: z.string().min(7, { message: "A senha é obrigatória e precisa de mínimo 7 caracteres" })
        .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
        .regex(/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/, 'É necessário no mínimo 1 carácter especial'),
    confirmPassword: z.string().min(7, { message: 'A confirmação de senha é obrigatória' })
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas precisam corresponderem",
    path: ["confirm"],
})

export type TRegisterFormValues = z.infer<typeof registerFormSchema>