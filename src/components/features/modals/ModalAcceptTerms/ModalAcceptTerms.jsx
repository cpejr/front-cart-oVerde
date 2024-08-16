import { useState } from "react";
import { toast } from "react-toastify";
import {
  CheckboxLabel,
  Container,
  DivButton,
  Header,
  Image,
  Section,
  StyledCheckBox,
  ConteinerPixForms,
  FormsText,
} from "./Styles";
import { LogoVerde } from "../../../../assets";
import { Modal } from "antd";
import PropTypes from "prop-types";
import GoogleButton from "../../GooglePay/GooglePay";
import PixButton from "../../PixButton/PixButton";
import FormSubmit from "../../FormSubmit/FormSubmit";
import { pixPaymentRequireSchema } from "./utils";
import { useGlobalLanguage } from "../../../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";
import { usePostPixPayment } from "../../../../hooks/querys/pixPayment";
import { useCart } from "../../../../Stores/CartContext";

export default function ModalAcceptTerms({ modal, onClose, price }) {
  //Tradução
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  const [accept, setAccept] = useState(false);
  const [isPix, setIsPix] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [checkBoxAlert, setCheckBoxAlert] = useState(false);

  const toggleAccept = () => {
    setAccept(!accept);
    setCheckBoxAlert(false);
    setIsPix(false);
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

  const openPix = () => setIsPix(true);

  const inputs = [
    {
      type: "input",
      key: "email",
      placeholder: translations.placeholderEmail,
      value: "",
    },
    {
      type: "input",
      key: "cpf",
      placeholder: translations.placeholderCPF,
      value: "",
    },
  ];

  const { mutate: postPixLink } = usePostPixPayment({
    onSuccess: () => {
      toast.success(translations.toastPostPixPayment);
    },
    onError: (err) => {
      toast.error(translations.toastPostPixPaymentError, err);
    },
  });

  const { cartItens } = useCart();

  function onFormsSubmit(data) {
    const body = {
      transaction_amount: price,
      email: data.email,
      number: data.cpf,
      description: `Compra de 10 no valor de R$ ${price}`,
    };

    //console.log(body);
    postPixLink(body);
  }

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
              <PixButton func={openPix} />

              {isPix && (
                <ConteinerPixForms>
                  <FormsText>
                    Preencha o formulário para gerar o QR Code
                  </FormsText>
                  <FormSubmit
                    inputs={inputs}
                    onSubmit={onFormsSubmit}
                    schema={pixPaymentRequireSchema}
                    color={"#33603F"}
                  ></FormSubmit>
                </ConteinerPixForms>
              )}
            </DivButton>
          </>
        )
      }
      width={"70%"}
    >
      <Container>
        <Header>{translations.termsAcceptText}</Header>
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
          {translations.checkboxText}.
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
