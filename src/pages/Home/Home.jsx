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
        <Title> {translations.whyChooseTitle} </Title>
      </Section>
      <Section>
        <Column>
          <p>{translations.whyChooseText1}</p>
        </Column>
        <Column>
          <p>{translations.whyChooseText2}</p>
        </Column>
        <Column>
          <p>{translations.whyChooseText3}</p>
        </Column>
      </Section>
      <Section>
        <Column>
          <Title>{translations.missionTitle}</Title>
          <p>{translations.missionText}</p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
          <Button onClick={() => navigate("/sobre")}>
            {translations.buttonText}
          </Button>
        </Column>
        <VideoLarger videoUrl="https://www.youtube.com/embed/DcvvWjExea4?si=iN7cYZE3LSZBIxpM" />
      </Section>

      <Section>
        <VideoLarger videoUrl="https://www.youtube.com/embed/DcvvWjExea4?si=iN7cYZE3LSZBIxpM" />
        <Column>
          <Title>{translations.visionTitle}</Title>
          <p>{translations.visionText}</p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
        </Column>
      </Section>

      <Section>
        <Column>
          <Title>{translations.valuesTitle}</Title>
          <p>{translations.valuesText}</p>
          <p>{translations.valuesTextPt2}</p>
          <p>{translations.valuesTextPt3}</p>
          <p>{translations.valuesTextPt4}</p>
        </Column>
        <Image>
          <img src={Icon} alt="Imagem de decoração" />
        </Image>
      </Section>
    </Container>
  );
}
