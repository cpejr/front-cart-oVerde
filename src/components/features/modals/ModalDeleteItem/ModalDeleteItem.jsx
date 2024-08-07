import PropTypes from "prop-types";
import { Container, Message, ModalStyle } from "./Styles";
import Button from "../../../common/Button/Button";

import { colors } from "../../../../styles/stylesVariables";

import { useGlobalLanguage } from '../../../../Stores/globalLanguage';
import { TranslateTextHeader } from './Translations';

export default function ModalDeleteItem({
  close,
  handleItemDelete,
  id,
  modal,
  closeModal,
  modalCloseIcon,
}) {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  return (
    <ModalStyle
      open={modal}
      onCancel={closeModal}
      width={500}
      height={250}
      padding={0}
      footer={null}
      closeIcon={modalCloseIcon}
      centered
      destroyOnClose
    >
      <Container>
        <Message>{translations.textMessage}</Message>
        <Button
          onClick={() => {
            handleItemDelete(id);
            close();
          }}
          type="button"
          color={colors.font.primary}
          border="1px solid "
          borderRadius="0.5rem"
          marginTop="1.5rem"
          fontSize="1.8rem"
          fontWeight="500"
          lineHeight="2.2rem"
        >
          {translations.textButton}
        </Button>
      </Container>
    </ModalStyle>
  );
}

ModalDeleteItem.propTypes = {
  close: PropTypes.func.isRequired,
  handleItemDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalCloseIcon: PropTypes.object.isRequired,
};
