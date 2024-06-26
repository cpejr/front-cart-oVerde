import { Container, Overlay, Section, Title, Column, VideoDiv } from "./Styles";

import { Button } from "../../components";

import Sponsors from "./Sponsors";
import { useNavigate } from "react-router-dom";

//ADICIONAR O src NAS TAGS DE IMAGENS

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Overlay>
        <VideoDiv>
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/RkzvCixHOVw"}
            title={"Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoDiv>
      </Overlay>
      <Sponsors />
      <Section>
        <Column>
          <Title>Missão</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.
          </p>

          <Button onClick={() => navigate("/sobre")}>Saiba Mais</Button>
        </Column>
        <VideoDiv>
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/RkzvCixHOVw"}
            title={"Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoDiv>
      </Section>

      <Section>
        <VideoDiv>
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/RkzvCixHOVw"}
            title={"Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoDiv>
        <Column>
          <Title>Visão e Valores</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.
          </p>
          {/* <LargerImg
            src={"cidade"}
            alt="Foto representando a cidade de Bom Despacho"
          /> */}
          <Button onClick={() => navigate("/memorial")}>Saiba Mais</Button>
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
          {/* <LargerImg
            src={"festa"}
            alt="Foto representativa de uma das festas da cidade"
          /> */}
          <Button onClick={() => navigate("/eventos")}>Saiba Mais</Button>
        </Column>
        <VideoDiv>
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/RkzvCixHOVw"}
            title={"Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoDiv>
      </Section>
    </Container>
  );
}
