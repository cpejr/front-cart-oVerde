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
import PixButton from "../../PixButton/PixButton";
import FormSubmit from "../../FormSubmit/FormSubmit";

export default function ModalAcceptTerms({ modal, onClose, price }) {
  const [accept, setAccept] = useState(false);
  const [isPix, setIsPix] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [checkBoxAlert, setCheckBoxAlert] = useState(false);
  console.log(price);
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

  const closePix = () => setIsPix(false);

  const inputs = [
    {
      type: "input",
      key: "email",
      placeholder: "Digite seu email",
      value: "",
    },
    {
      type: "input",
      key: "cpf",
      placeholder: "Digite seu cpf",
      value: "",
    },
  ];

  return (
    <Modal
      open={modal}
      onCancel={handleCancel}
      footer={
        accept && (
          <>
            <DivButton key="divButton">
              <GoogleButton
                price={price}
                onClick={handleSubmit}
                onClose={onClose}
              />
              <PixButton boll={isPix} />
            </DivButton>
            {isPix && (
              <FormSubmit
                inputs={inputs}
                onSubmit={handleCancel}
                schema={closePix}
                color={"#33603F"}
              ></FormSubmit>
            )}
          </>
        )
      }
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
  price: PropTypes.string.isRequired,
};
