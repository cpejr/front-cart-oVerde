// Libs
import { useNavigate } from "react-router-dom";
// Components
import { Container, Overlay, Section, Title, Column, Image } from "./Styles";
import { Square } from "@assets/index";
import { Button, VideoLarger, VideoSmall } from "@components";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Overlay>
        <VideoLarger videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
        <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
      </Overlay>
      <Section>
        <Column>
          <Title>Missão</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.
          </p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
          <Button onClick={() => navigate("/sobre")}>Saiba Mais</Button>
        </Column>
        <VideoLarger videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
      </Section>

      <Section>
        <VideoLarger videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
        <Column>
          <Title>Visão e valores</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.
          </p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/RkzvCixHOVw" />
          <Button onClick={() => navigate("/memorial")}>Saiba Mais</Button>
          <LargerImg
            alt="Foto representando o Cartão Verde"
          />
          <Button onClick={() => navigate("/comprar-arvores")}>Saiba Mais</Button>
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
          <Button onClick={() => navigate("/eventos")}>Saiba Mais</Button>
        </Column>
        <Image>
          <img src={Square} alt="Imagem de decoração" />
        </Image>
      </Section>
    </Container>
  );
}
