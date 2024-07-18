import { useState } from "react";
import {
  CheckboxLabel,
  Container,
  DivButton,
  Header,
  Image,
  ModalButton,
  Section,
  StyledCheckBox,
} from "./Style";
import { LogoVerde } from "../../../../assets";
import { Modal } from "antd";
import PropTypes from "prop-types";

export default function ModalAcceptTerms({ modal, onClose }) {
  const [accept, setAccept] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [checkBoxAlert, setCheckBoxAlert] = useState(false);

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
      footer={[
        <DivButton key="divButton">
          <ModalButton key="submit" type="primary" onClick={handleSubmit}>
            Confirmar
          </ModalButton>
        </DivButton>,
      ]}
      width={"70%"}
    >
      <Container>
        <Header>Termo de Aceite e privacidade</Header>
        <Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed
            consequat enim. Pellentesque viverra tristique nisi ut suscipit.
            Proin augue nulla, maximus ullamcorper tincidunt non, consectetur
            non tellus. Phasellus ullamcorper pellentesque lectus vel egestas.
            Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed
            consequat enim. Pellentesque viverra tristique nisi ut suscipit.
            Proin augue nulla, maximus ullamcorper tincidunt non, consectetur
            non tellus. Phasellus ullamcorper pellentesque lectus vel egestas.
            Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.
          </p>
        </Section>

        <Image>
          <img src={LogoVerde} alt="Logo" />
        </Image>

        <Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed
            consequat enim. Pellentesque viverra tristique nisi ut suscipit.
            Proin augue nulla, maximus ullamcorper tincidunt non, consectetur
            non tellus. Phasellus ullamcorper pellentesque lectus vel egestas.
            Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed
            consequat enim. Pellentesque viverra tristique nisi ut suscipit.
            Proin augue nulla, maximus ullamcorper tincidunt non, consectetur
            non tellus. Phasellus ullamcorper pellentesque lectus vel egestas.
            Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.
          </p>
        </Section>
        <CheckboxLabel alert={checkBoxAlert}>
          <StyledCheckBox
            className="custom-checkbox"
            onChange={toggleAccept}
            checked={accept}
          />
          Eu concordo com os termos descritos acima
        </CheckboxLabel>
      </Container>
    </Modal>
  );
}

//props validation
ModalAcceptTerms.propTypes = {
  modal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
