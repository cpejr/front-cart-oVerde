import { z } from "zod";
import { useGlobalLanguage } from "../../../Stores/globalLanguage";
import { TranslateTextRegister } from "../../../pages/RegisterPage/Translations";

export const validationSchemaRegister = () => {
 
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateTextRegister({ globalLanguage });

  return z.object({
    
    name: z
      .string({ required_error: translation.nameStringError })
      .min(1, { message: translation.nameMinError }),

    
    email: z
      .string({ required_error: translation.emailStringError })
      .email({ message: translation.emailError }),

    
    password: z
      .string({ required_error: translation.passwordStringError })
      .min(5, { message: translation.passwordMinError }), 
     
  });
};
