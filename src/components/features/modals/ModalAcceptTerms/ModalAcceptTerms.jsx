import { useState } from "react";
import {
  CheckboxLabel,
  Container,
  DivButton,
  Header,
  Image,
  Section,
  StyledCheckBox,
} from "./Styles";
import { LogoVerde } from "../../../../assets";
import { Modal } from "antd";
import PropTypes from "prop-types";
import GoogleButton from "../../GooglePay/GooglePay";
import { useGlobalLanguage } from "../../../../Stores/globalLanguage";
import { TranslateTextModal } from "./Translation";

export default function ModalAcceptTerms({ modal, onClose, price }) {
  const [accept, setAccept] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [checkBoxAlert, setCheckBoxAlert] = useState(false);
  console.log(price);

  //translate
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextModal({ globalLanguage });

  const toggleAccept = () => {
    setAccept(!accept);
    setCheckBoxAlert(false);
  };

  const handleSubmit = () => {
    if (accept) {
      setSubmit(!submit);
      onClose();
      toggleAccept();
      setCheckBoxAlert(false);
    } else {
      setCheckBoxAlert(true);
    }
  };

  const handleCancel = () => {
    onClose();
    setAccept(false);
  };

  return (
    <Modal
      open={modal}
      onCancel={handleCancel}
      footer={
        accept && (
          <DivButton key="divButton">
            <GoogleButton
              price={price}
              onClick={handleSubmit}
              onClose={onClose}
            />
          </DivButton>
        )
      }
      width={"70%"}
    >
      <Container>
        <Header>{translations.Title}</Header>
        <Section>
          <p>{translations.paragraph1}</p>
          <p>{translations.paragraph2}</p>
        </Section>

        <Image>
          <img src={LogoVerde} alt="Logo" />
        </Image>

        <Section>
          <p>{translations.paragraph3}</p>
          <p>{translations.paragraph4}</p>
        </Section>
        <CheckboxLabel alert={checkBoxAlert}>
          <StyledCheckBox
            className="custom-checkbox"
            onChange={toggleAccept}
            checked={accept}
          />
          {translations.select}
        </CheckboxLabel>
      </Container>
    </Modal>
  );
}

//props validation
ModalAcceptTerms.propTypes = {
  modal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
};
