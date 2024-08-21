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
    specie: z
      .string({ required_error: translations.specieRequired })
      .min(1, { message: translations.shortSpecie }),
    price: z.number({ required_error: translations.priceRequired }),
  });
};
