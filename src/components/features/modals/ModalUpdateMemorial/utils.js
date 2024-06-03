import { z } from "zod";

export const updateCollectionValidationSchema = z
  .object({
    title: z
      .string({ required_error: "O título é obrigatório" })
      .min(2, { message: "O título deve ter pelo menos 2 caracteres" })
      .max(60, { message: "O título não pode exceder 60 caracteres" }),
    link: z
      .string({ required_error: "o link" })
      .min(1, { message: "O URL deve ter pelo menos 1 caracter" }),
  })
  .nonstrict();
