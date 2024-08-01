import { Box, StyledButton, PriceLabel } from "./Styles";
import { useState } from "react";
import PropTypes from "prop-types";
import ModalAcceptTerms from "../../components/features/modals/ModalAcceptTerms/ModalAcceptTerms";

export default function CartBuyBox({ value }) {
  const [modalAccept, setModalAccept] = useState(false);

  const openModalAccept = () => setModalAccept(true);
  const closeModalAccept = () => setModalAccept(false);
  return (
    <Box>
      <PriceLabel>TOTAL: R$ {value}</PriceLabel>
      <StyledButton onClick={openModalAccept}>FECHAR COMPRA</StyledButton>
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
