import { z } from "zod";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateText } from "./Translations";

export const newCollectionValidationSchema = () => {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  return z.object({
    name: z
      .string({ required_error: translations.nameRequired })
      .min(2, { message: translations.shortName })
      .max(60, { message: translations.longName }),
    description: z
      .string({ required_error: translations.descriptionRequired })
      .min(1, { message: translations.shortDescription }),
    location: z
      .string({ required_error: translations.locationRequired })
      .min(1, { message: translations.shortLocation }),
    total_quantity: z.any({ required_error: translations.quantityRequired }),
    price1: z.any({ required_error: translations.priceRequired }),
    price2: z.any({ required_error: translations.priceRequired }),
    price3: z.any({ required_error: translations.priceRequired }),
  });
};
