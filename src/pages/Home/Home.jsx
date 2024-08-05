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
import { Button, VideoLarger, VideoSmall, DemoCarousel } from "@components";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerCarousel>
        <DemoCarousel />
      </ContainerCarousel>

      <Section>
        <Column>
          <Title>Missão</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.
          </p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/DcvvWjExea4?si=iN7cYZE3LSZBIxpM" />
          <Button onClick={() => navigate("/sobre")}>Saiba Mais</Button>
        </Column>
        <VideoLarger videoUrl="https://www.youtube.com/embed/DcvvWjExea4?si=iN7cYZE3LSZBIxpM" />
      </Section>

      <Section>
        <VideoLarger videoUrl="https://www.youtube.com/embed/DcvvWjExea4?si=iN7cYZE3LSZBIxpM" />
        <Column>
          <Title>Visão e valores</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.
          </p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
        </Column>
      </Section>
      <Section>
        <Column>
          <Title>Nossos produtos</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.
          </p>
          <Button onClick={() => navigate("/comprar-arvores")}>
            Saiba Mais
          </Button>
        </Column>
        <Image>
          <img src={Icon} alt="Imagem de decoração" />
        </Image>
      </Section>
    </Container>
  );
}
