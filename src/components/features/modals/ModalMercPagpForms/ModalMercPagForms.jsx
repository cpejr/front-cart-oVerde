import { useState } from "react";
import { Container, ModalStyle } from "./Styles";
import PropTypes from "prop-types";
import FormSubmit from "../../FormSubmit/FormSubmit";
import { pixPaymentRequireSchemaSchema } from "./utils";

export default function ModalMPForms({ modal, onClose, price }) {
  const handleCancel = () => {
    onClose();
  };

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
    <ModalStyle
      open={modal}
      onCancel={handleCancel}
      width={500}
      height={250}
      centered
    >
      <Container>
        <FormSubmit
          inputs={inputs}
          onSubmit={handleCancel}
          schema={pixPaymentRequireSchemaSchema}
          color={"#33603F"}
        ></FormSubmit>
      </Container>
    </ModalStyle>
  );
}

ModalMPForms.propTypes = {
  modal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
};
