import {
  CheckboxLabel,
  Container,
  Header,
  Image,
  Section,
  StyledCheckBox,
} from "./Style";
import Square from "../../../../assets/Home/Square.svg";

export default function ModalAcceptTerms() {
  return (
    <Container>
      <Header>Termo de Aceite e privacidade</Header>
      <Section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
          volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed
          consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin
          augue nulla, maximus ullamcorper tincidunt non, consectetur non
          tellus. Phasellus ullamcorper pellentesque lectus vel egestas.
          Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
          volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed
          consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin
          augue nulla, maximus ullamcorper tincidunt non, consectetur non
          tellus. Phasellus ullamcorper pellentesque lectus vel egestas.
          Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.
        </p>
      </Section>

      <Image>
        <img src={Square} alt="Imagem de teste"></img>
      </Image>

      <Section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
          volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed
          consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin
          augue nulla, maximus ullamcorper tincidunt non, consectetur non
          tellus. Phasellus ullamcorper pellentesque lectus vel egestas.
          Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
          volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed
          consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin
          augue nulla, maximus ullamcorper tincidunt non, consectetur non
          tellus. Phasellus ullamcorper pellentesque lectus vel egestas.
          Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.
        </p>
      </Section>
      <CheckboxLabel>
        <StyledCheckBox className="custom-checkbox" />
        Eu concordo com os termos descritos acima
      </CheckboxLabel>
    </Container>
  );
}
