import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default function DemoCarousel() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6000}
      infiniteLoop={true}
      dynamicHeight={false}
    >
      <StyledImage src="/src/assets/Home/background.png" alt="slide 1" />

      <StyledImage src="/src/assets/Home/EventNotFound.png" alt="slide 2" />

      <StyledImage src="/src/assets/CartPage/Tree.png" alt="slide 3" />
    </Carousel>
  );
}
