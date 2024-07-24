import { Square } from "@assets/index";
import { Title, Container, Image } from "./Styles";

import { useGlobalLanguage } from '../../../../Stores/globalLanguage';
import { TranslateTextHeader } from './Translations';

export default function AboutUs() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  return (
    <Container>
      <Title>SOBRE A EMPRESA</Title>
      <Image>
        <img src={Square} alt="Imagem de decoração" />
      </Image>
      <p>
        {translations.text}
      </p>
    </Container>
  );
}
