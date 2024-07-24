// Libs
import { useNavigate } from "react-router-dom";
// Components
import { Container, Overlay, Section, Title, Column, Image } from "./Styles";
import { Square } from "@assets/index";
import { Button, VideoLarger, VideoSmall } from "@components";
import { useGlobalLanguage } from '../../../../Stores/globalLanguage';
import { TranslateTextHeader } from './Translations';

export default function Home() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });
  
  const navigate = useNavigate();

  return (
    <Container>
      <Overlay>
        <VideoLarger videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
        <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
      </Overlay>
      <Section>
        <Column>
          <Title>{translations.missionTitle}</Title>
          <p>
            {translations.missionText}
          </p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
          <Button onClick={() => navigate("/sobre")}>{translations.buttonText}</Button>
        </Column>
        <VideoLarger videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
      </Section>

      <Section>
        <VideoLarger videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
        <Column>
          <Title>{translations.visionTitle}</Title>
          <p>
            {translations.visionText}
          </p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
          <Button onClick={() => navigate("/comprar-arvores")}>
            {translations.buttonText}
          </Button>
        </Column>
      </Section>

      <Section>
        <Column>
          <Title>{translations.productsTitle}</Title>
          <p>
            {translations.productsText}
          </p>
          <Button onClick={() => navigate("/eventos")}>{translations.buttonText}</Button>
        </Column>
        <Image>
          <img src={Square} alt="Imagem de decoração" />
        </Image>
      </Section>
    </Container>
  );
}
