// Libs
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";
// Components
import { ConfigProvider } from "antd";
import {
  StyledCard,
  StyledButton,
  Group,
  CardLine,
  CardTitle,
  DivButton,
} from "./Styles";
import { TreeCertificatePDF } from "@components";

export default function LargeCard({ data, onBuy }) {
  // Link Simulation (it will be removed)
  const images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
  ];

  const { name, description, buttonText } = data;

  // PDF Handling

  function SaveFile() {
    pdf(<TreeCertificatePDF data={data} />)
      .toBlob()
      .then((blob) => saveAs(blob, `${data?.id_tree?.name}.pdf`));
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: `#BAFA53`,
            defaultHoverBg: `#33603F`,
            defaultColor: `#33603F`,
            defaultHoverColor: `white`,
            paddingBlock: `20px`,
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
          <CardTitle>{name}</CardTitle>
        </Group>
        <CardLine>
          <p>{description}</p>
        </CardLine>
        <CardLine>
          {/* <Button onClick={SaveFile} bordercolor={colors.font.primary}></Button> */}
        </CardLine>
        <DivButton>
          {onBuy ? (
            <StyledButton onClick={onBuy}>{buttonText}</StyledButton>
          ) : (
            <StyledButton onClick={SaveFile}>{buttonText}</StyledButton>
          )}
        </DivButton>
      </StyledCard>
    </ConfigProvider>
  );
}

LargeCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

LargeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  buttonText: PropTypes.string,
  data: PropTypes.object,
  onBuy: PropTypes.func,
};
