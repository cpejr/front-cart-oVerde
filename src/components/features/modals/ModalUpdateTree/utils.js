import { z } from "zod";

export const updateCollectionValidationSchema = z
  .object({
    name: z.string().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
    especire: z.string().optional(),
  });