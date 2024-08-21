import { Box, DeleteIcon, Description, Name, Price, StyledImg } from "./Styles";
import { Delete } from "@assets/index";
import PropTypes from "prop-types";
import { useCart } from "../../../Stores/CartContext";
import { useGetArchives } from "../../../hooks/querys/archive";
import { useGlobalLanguage } from "../../../Stores/globalLanguage";
import { TranslateTextCart } from "./Translation";

export default function CartCard({ data }) {
  const { removeFromCart } = useCart();

  //translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextCart({ globalLanguage });

  const name = data?.name;
  const IDs = data?.archive;
  const archiveIDs = IDs?.map((archive) => archive?._id);
  const formattedArchives = archiveIDs?.join(", ");

  const { data: archiveData, isLoading: isImageLoading } = useGetArchives({
    id: formattedArchives,
    name: name,
    onError: (err) => {
      console.error(translations.error, err);
    },
  });

  function removeTree() {
    removeFromCart(data._id);
  }

  return (
    <Box>
      <DeleteIcon src={Delete} onClick={removeTree} />
      {isImageLoading || !archiveData ? (
        <p>{translations.loading}</p>
      ) : (
        archiveData && (
          <div>
            {archiveData.map((file, index) => (
              <div key={index}>
                {file.startsWith("data:image") && (
                  <StyledImg src={file} alt={`Imagem ${index}`} />
                )}
                {file.startsWith("data:video") && (
                  <video controls width="100%" height="auto">
                    <source src={file} type="video/mp4" />
                    {translations.unsupportedVideo}
                  </video>
                )}
                {file.startsWith("data:audio") && (
                  <audio controls>
                    <source src={file} type="audio/mpeg" />
                    {translations.unsupportedAudio}
                  </audio>
                )}
                {file.startsWith("data:application/pdf") && (
                  <object
                    data={file}
                    type="application/pdf"
                    width="100%"
                    height="400px"
                  >
                    {translations.unsupportedPDF}{" "}
                    <a href={file}>{translations.clickHere}</a>.
                  </object>
                )}
              </div>
            ))}
          </div>
        )
      )}
      <Name>{data?.name || translations.noName}</Name>
      <Description>
        {data?.description || translations.noDescription}
      </Description>
      <Price>
        {translations.currency} {data?.price || "0.00"}
      </Price>
    </Box>
  );
}

CartCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    archive: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
