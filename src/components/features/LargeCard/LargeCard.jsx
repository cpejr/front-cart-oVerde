import PropTypes from "prop-types";
import { ConfigProvider } from "antd";
import {
  StyledCard,
  StyledButton,
  Group,
  CardLine,
  CardTitle,
  DivButton,
} from "./Styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
];

export default function LargeCard({ data }) {
  const { title, description, link, buttonText } = data;

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: `#BAFA53`,
            defaultHoverBg: `#33603F`,
            defaultColor: `#33603F`,
            defaultHoverColor: `white`,
            paddingBlock:`20px`,
          },
        },
      }}
    >
      <StyledCard>
        <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img alt={`carousel-img-${index}`} src={image} />
            </div>
          ))}
        </Carousel>
        <Group>
          <CardTitle>{title}</CardTitle>
        </Group>
        <CardLine>
          <p>{description}</p>
        </CardLine>
        <DivButton>
          <StyledButton href={link}>{buttonText}</StyledButton>
        </DivButton>
      </StyledCard>
    </ConfigProvider>
  );
}

LargeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  buttonText: PropTypes.string,
  data: PropTypes.object,
};
