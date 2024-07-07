import { z } from "zod";

export const updateCollectionValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  specie: z.string().optional(),
});
