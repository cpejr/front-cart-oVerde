import { z } from "zod";

export const newCollectionValidationSchema = z.object({
  name: z
    .string({ required_error: "O nome é obrigatório" })
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(60, { message: "O nome não pode exceder 60 caracteres" }),
  description: z
    .string({ required_error: "A descrição é obrigatória" })
    .min(1, { message: "Campo obrigatório" }),
  location: z
    .string({ required_error: "A localização é obrigatória" })
    .min(1, { message: "Campo obrigatório" }),
  specie: z
    .string({ required_error: "A espécie é obrigatória" })
    .min(1, { message: "Campo obrigatório" }),
  price: z.any({ required_error: "O preço é obrigatório" }),
});
