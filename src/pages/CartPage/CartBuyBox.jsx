import { Box, StyledButton, PriceLabel } from "./Styles";
import { useState } from "react";
import PropTypes from "prop-types";
import ModalAcceptTerms from "../../components/features/modals/ModalAcceptTerms/ModalAcceptTerms";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateTextCart } from "./translation";
export default function CartBuyBox({ value }) {
  const [modalAccept, setModalAccept] = useState(false);

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextCart({ globalLanguage });

  const openModalAccept = () => setModalAccept(true);
  const closeModalAccept = () => setModalAccept(false);
  return (
    <Box>
      <PriceLabel>
        {translations.value} {value}
      </PriceLabel>
      <StyledButton onClick={openModalAccept} disabled={value == "0.00"}>
        {translations.purchase}
      </StyledButton>
      <ModalAcceptTerms
        price={value}
        modal={modalAccept}
        onClose={closeModalAccept}
      />
    </Box>
  );
}

CartBuyBox.propTypes = {
  value: PropTypes.double,
};
