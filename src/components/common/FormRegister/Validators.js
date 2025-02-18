import { z } from "zod";
import { TranslateTextRegister } from "../../../pages/RegisterPage/Translations";

export const validationSchemaRegister = (globalLanguage) => {
  const translation = TranslateTextRegister({ globalLanguage });

  return z.object({
    nome: z
      .string({ required_error: translation.nameStringError })
      .min(1, { message: translation.nameMinError }),

    email: z
      .string({ required_error: translation.emailStringError })
      .email({ message: translation.emailError }),

    senha: z
      .string({ required_error: translation.passwordStringError })
      .min(5, { message: translation.passwordMinError }),
  });
};
