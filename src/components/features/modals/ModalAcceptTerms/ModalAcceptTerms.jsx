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
import Square from "../../../../assets/Home/Square.svg";
import { Modal } from "antd";
import PropTypes from "prop-types";

//props validation
ModalAcceptTerms.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function ModalAcceptTerms({ show, onClose }) {
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
      setAccept(false);
      setCheckBoxAlert(false);
    } else {
      setCheckBoxAlert(true);
      //alert("É necessário aceitar antes de continuar.");
    }
  };

  const handleCancel = () => {
    onClose();
    setAccept(false);
  };

  if (!show) return null;

  return (
    <Modal
      visible={show}
      onOk={handleSubmit}
      onCancel={handleCancel}
      footer={[
        <DivButton key="divButton">
          <ModalButton key="back" onClick={handleCancel}>
            Cancelar
          </ModalButton>
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
          <img src={Square} alt="Imagem de teste" />
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
            checked={accept}
            onChange={toggleAccept}
          />
          Eu concordo com os termos descritos acima
        </CheckboxLabel>
      </Container>
    </Modal>
  );
}
