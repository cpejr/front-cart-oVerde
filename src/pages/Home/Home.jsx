import {
  Container,
  Overlay,
  Section,
  Title,
  Column,
  LargerImg,
  SmallerImg,
} from "./Styles";

import { Button } from "../../components";

import Sponsors from "./Sponsors";
import { useNavigate } from "react-router-dom";

//ADICIONAR O src NAS TAGS DE IMAGENS

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Overlay>
        <img alt="Apresentação do site" />
      </Overlay>
      <Sponsors />
      <Section>
        <Column>
          <Title>Quem somos</Title>
          <p>
            Texto de quem somos do Cartão Verde.
          </p>
          <LargerImg alt="Painel com diversas impressões digitais" />
          <Button onClick={() => navigate("/sobre")}>Saiba Mais</Button>
        </Column>
        <SmallerImg alt="Painel com diversas impressões digitais" />
      </Section>

      <Section>
        <SmallerImg
          alt="Foto representando o Cartão Verde"
        />
        <Column>
          <Title>O que é o Cartão Verde?</Title>
          <p>
            Texto falando sobre o que é o Cartão Verde.
          </p>
          <LargerImg
            alt="Foto representando o Cartão Verde"
          />
          <Button onClick={() => navigate("/minhas-arvores")}>Saiba Mais</Button>
        </Column>
      </Section>

      {/* <Section>
        <Column>
          <Title>Nosso eventos</Title>
          <p>
            Texto sobre os Eventos
          </p>
          <LargerImg
            alt="Foto representativa de uma das árvores"
          />
          <Button onClick={() => navigate("/eventos")}>Saiba Mais</Button>
        </Column>
        <SmallerImg
          alt="Foto representativa de uma das árvores"
        />
      </Section> */}
    </Container>
  );
}

