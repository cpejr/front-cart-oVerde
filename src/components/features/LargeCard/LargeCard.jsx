// Libs
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { CiBookmark } from "react-icons/ci";
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
import { TreeCertificatePDF, Button } from "@components";
import { colors } from "@styles/stylesVariables";

export default function LargeCard({ data }) {
  // Link Simulation (it will be removed)
  const images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
  ];
  const { title, description } = data;
  const PdfData = {
    user: "usuario",
    tree: "árvore",
    certificate: "certificado",
  };
const images = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
];

export default function LargeCard({ data, onBuy }) {
  const { name, description, link, buttonText } = data;

  // PDF Handling

  function SaveFile() {
    pdf(<TreeCertificatePDF data={PdfData} />)
      .toBlob()
      .then((blob) => saveAs(blob, `${PdfData?.certificate}.pdf`));
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
          <CardTitle>{name}</CardTitle>
        </Group>
        <CardLine>
          <p>{description}</p>
        </CardLine>
        <DivButton>
          {onBuy ? (
            <StyledButton onClick={onBuy}>{buttonText}</StyledButton>
          ) : (
            <StyledButton href={link}>{buttonText}</StyledButton>
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
