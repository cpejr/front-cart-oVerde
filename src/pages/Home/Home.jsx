// Libs
import { useNavigate } from "react-router-dom";
// Components
import { Container, Overlay, Section, Title, Column, Image } from "./Styles";
import { Icon } from "@assets/index";
import { Button, VideoLarger, VideoSmall } from "@components";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Overlay>
        <VideoLarger videoUrl="https://www.youtube.com/embed/DcvvWjExea4?si=iN7cYZE3LSZBIxpM" />
        <VideoSmall videoUrl="https://www.youtube.com/embed/DcvvWjExea4?si=iN7cYZE3LSZBIxpM" />
        
      </Overlay>
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
          <VideoSmall videoUrl="https://www.youtube.com/embed/DcvvWjExea4?si=iN7cYZE3LSZBIxpM" />
          <Button>Saiba Mais</Button>
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
