import { z } from "zod";

export const validador = z.object({
  email: z
    .string({ required_error: "Insira um e-mail!" })
    .min(1, { message: "Preencha o campo e-mail!" })
    .max(255, { message: "Limite máximo de carácteres alcançado!" })
    .email("Insira um email válido!"),
  senha: z
    .string({ required_error: "Insira uma senha!" })
    .min(8, { message: "Senha precisa ter no mínimo 8 carácteres!" })
    .max(20, { message: "Limite máximo de carácteres alcançado!" }),
});
