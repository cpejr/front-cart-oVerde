import PropTypes from "prop-types";
import { Container, DeleteButton, Message } from "./Styles";
import { useGlobalLanguage } from "../../../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";
import { useCart } from "../../../../Stores/CartContext";

export default function ModalLogoff({ close, handleLogOff }) {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });
  const { clearCart } = useCart();

  return (
    <Container>
      <Message>{translations.textMessage}</Message>
      <DeleteButton
        onClick={() => {
          clearCart();
          handleLogOff();
          close();
        }}
        type="button"
      >
        {translations.textButton}
      </DeleteButton>
    </Container>
  );
}

ModalLogoff.propTypes = {
  close: PropTypes.func.isRequired,
  handleLogOff: PropTypes.func.isRequired,
};
