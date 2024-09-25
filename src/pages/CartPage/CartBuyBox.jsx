/* eslint-disable react/react-in-jsx-scope */
import { Box, StyledButton, PriceLabel } from "./Styles";
import { useState } from "react";
import PropTypes from "prop-types";
import ModalAcceptTerms from "../../components/features/modals/ModalAcceptTerms/ModalAcceptTerms";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateTextCart } from "./Translation";
import useAuthStore from "../../Stores/auth";

import { useGoogleLogin } from "../../services/useGoogleLogin";

export default function CartBuyBox({ value, year }) {
  const [modalAccept, setModalAccept] = useState(false);
  const isLogged = useAuthStore((state) => state?.auth);

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextCart({ globalLanguage });

  const openModalAccept = () => setModalAccept(true);
  const closeModalAccept = () => setModalAccept(false);

  const { logGoogleUser } = useGoogleLogin();

  return (
    <Box>
      <PriceLabel>
        {translations.value} {value}
      </PriceLabel>
      <StyledButton
        onClick={isLogged ? openModalAccept : logGoogleUser}
        disabled={value == "0.00"}
      >
        {translations.purchase}
      </StyledButton>
      <ModalAcceptTerms
        price={value}
        modal={modalAccept}
        onClose={closeModalAccept}
        years={year + 1}
      />
    </Box>
  );
}

CartBuyBox.propTypes = {
  value: PropTypes.double,
  year: PropTypes.number,
};
