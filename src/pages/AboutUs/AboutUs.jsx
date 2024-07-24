import { Icon } from "@assets/index";
import { Title, Container, Image } from "./Styles";

export default function AboutUs() {
  return (
    <Container>
      <Title>SOBRE A EMPRESA</Title>
      <Image>
        <img src={Icon} alt="Imagem de decoração" />
      </Image>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
        libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat.
        Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim.
        Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla,
        maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus
        ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet
        leo dignissim laoreet et porta elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Curabitur et libero ligula. Aliquam
        pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu
        turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra
        tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper
        tincidunt non, consectetur non tellus. Phasellus ullamcorper
        pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim
        laoreet et porta elit.
      </p>
    </Container>
  );
}
