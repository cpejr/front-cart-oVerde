// Libs
import { useNavigate } from "react-router-dom";
// Components
import {
  Container,
  Section,
  Title,
  Column,
  Image,
  ContainerCarousel,
} from "./Styles";
import { Icon } from "@assets/index";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";
import { Button, VideoLarger, VideoSmall, DemoCarousel } from "@components";

export default function Home() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  const navigate = useNavigate();

  return (
    <Container>
      <ContainerCarousel>
        <DemoCarousel />
      </ContainerCarousel>

      <Section>
        <Column>
          <Title>{translations.missionTitle}</Title>
          <p>{translations.missionText}</p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
          <Button onClick={() => navigate("/sobre")}>
            {translations.buttonText}
          </Button>
        </Column>
        <VideoLarger videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
      </Section>

      <Section>
        <VideoLarger videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
        <Column>
          <Title>{translations.visionTitle}</Title>
          <p>{translations.visionText}</p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
          <Button onClick={() => navigate("/comprar-arvores")}>
            {translations.buttonText}
          </Button>
        </Column>
      </Section>
      <Section>
        <Column>
          <Title>{translations.valuesTitle}</Title>
          <p>{translations.valuesText}</p>
          <p>{translations.valuesTextPt2}</p>
          <p>{translations.valuesTextPt3}</p>
          <p>{translations.valuesTextPt4}</p>
          <Button onClick={() => navigate("/eventos")}>
            {translations.buttonText}
          </Button>
        </Column>
        <Image>
          <img src={Icon} alt="Imagem de decoração" />
        </Image>
      </Section>
    </Container>
  );
}
