// Libs
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { CiBookmark } from "react-icons/ci";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";
// Components
import {
  StyledCard,
  Group,
  LineSVG,
  CardLine,
  CardTitle,
  FavoriteIcon,
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

  // PDF Handling

  function SaveFile() {
    pdf(<TreeCertificatePDF data={PdfData} />)
      .toBlob()
      .then((blob) => saveAs(blob, `${PdfData?.certificate}.pdf`));
  }

  return (
    <StyledCard>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img alt={`carousel-img-${index}`} src={image} />
          </div>
        ))}
      </Carousel>
      <Group>
        <LineSVG></LineSVG>
        <CardTitle>
          {title}
          <FavoriteIcon>
            <CiBookmark />
          </FavoriteIcon>
        </CardTitle>
      </Group>
      <CardLine>
        <p>{description}</p>
      </CardLine>
      <CardLine>
        <Button onClick={SaveFile} bordercolor={colors.font.primary}>
          Download PDF
        </Button>
      </CardLine>
    </StyledCard>
  );
}

LargeCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
