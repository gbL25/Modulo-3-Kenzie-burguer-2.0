import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().nonempty({ message: 'E-mail é obrigatório' }),
    password: z.string().nonempty({ message: "A senha é obrigatória" })
})