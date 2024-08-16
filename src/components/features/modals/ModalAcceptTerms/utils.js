import { z } from "zod";

export const pixPaymentRequireSchema = z.object({
  email: z.string().email(),
  cpf: z.string(),
});
