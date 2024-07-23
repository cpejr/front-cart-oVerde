// Libs
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";
import { ScaleLoader } from "react-spinners";
import { ConfigProvider } from "antd";
// Components
import {
  StyledCard,
  StyledButton,
  Group,
  CardLine,
  CardTitle,
  DivButton,
  CarouselStyles,
  CarouselImg,
} from "./Styles";
import { TreeCertificatePDF } from "@components";
import { useGetArchives } from "@hooks/querys/archive";
import { colors } from "@styles/stylesVariables";

export default function LargeCard({ data, onBuy }) {
  const { description, buttonText, price } = data;
  const name = data?.id_tree?.name || data?.name;

  // PDF Handling
  function SaveFile() {
    pdf(<TreeCertificatePDF data={data} />)
      .toBlob()
      .then((blob) => saveAs(blob, `${data?.id_tree?.name}.pdf`));
  }

  // BackEnd Calls
  const IDs = data?.id_tree?.archive || data?.archive;
  const archiveIDs = IDs?.map((archive) => archive?._id);
  const formattedArchives = archiveIDs?.join(", ") || IDs?.join(", ");

  const { data: archiveData, isLoading: isImageLoading } = useGetArchives({
    id: formattedArchives,
    name: name,
    onError: (err) => {
      console.error("Error ao pegar os arquivos", err);
    },
  });

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
        {isImageLoading || !archiveData ? (
          <CardLine style={{ justifyContent: "center" }}>
            <ScaleLoader color={colors.font.secondary} />
          </CardLine>
        ) : (
          archiveData && (
            <CarouselStyles>
              <Carousel
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
              >
                {archiveData.map((file, index) => (
                  <div key={index}>
                    {file.startsWith("data:image") && (
                      <CarouselImg src={file} alt={`Imagem ${index}`} />
                    )}
                    {file.startsWith("data:video") && (
                      <video controls width="100%" height="auto">
                        <source src={file} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                    )}
                    {file.startsWith("data:audio") && (
                      <audio controls>
                        <source src={file} type="audio/mpeg" />
                        Seu navegador não suporta o elemento de áudio.
                      </audio>
                    )}
                    {file.startsWith("data:application/pdf") && (
                      <object
                        data={file}
                        type="application/pdf"
                        width="100%"
                        height="400px"
                      >
                        Seu navegador não suporta visualização de PDF. Você pode{" "}
                        <a href={file}>baixá-lo aqui</a>.
                      </object>
                    )}
                  </div>
                ))}
              </Carousel>
            </CarouselStyles>
          )
        )}

        <Group>
          <CardTitle>{name}</CardTitle>
        </Group>
        <CardLine>
          <p>{description}</p>
        </CardLine>
        <CardLine>
          <p>R$ {price}</p>
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
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    archive: PropTypes.array,
    id_tree: PropTypes.shape({
      name: PropTypes.string,
      archive: PropTypes.arrayOf(PropTypes.string),
    }),
    buttonText: PropTypes.string,
  }),
  onBuy: PropTypes.func,
};
