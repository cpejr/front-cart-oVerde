import { z } from "zod";

export const pixPaymentRequireSchema = z.object({
  email: z.string(),
  cpf: z.string(),
});
