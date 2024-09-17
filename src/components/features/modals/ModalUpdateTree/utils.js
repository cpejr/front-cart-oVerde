import { z } from "zod";

export const updateCollectionValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  total_quantity: z.any().optional(),
  price1: z.any().optional(),
  price2: z.any().optional(),
  price3: z.any().optional(),
});
