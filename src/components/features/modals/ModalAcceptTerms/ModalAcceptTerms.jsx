import { useState, useEffect } from "react";
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
import { TranslateTextModal } from "./Translation";
import PixButton from "../../PixButton/PixButton";
import FormSubmit from "../../FormSubmit/FormSubmit";
import { pixPaymentRequireSchema } from "./utils";
import { useGlobalLanguage } from "../../../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";
import { usePostPixPayment } from "../../../../hooks/querys/pixPayment";
import { useCart } from "../../../../Stores/CartContext";
import { useCreateCertificate } from "../../../../hooks/querys/certificate";
import useAuthStore from "../../../../Stores/auth";


export default function ModalAcceptTerms({ modal, onClose, price }) {
  //Tradução
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  const [accept, setAccept] = useState(false);
  const [isPix, setIsPix] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [checkBoxAlert, setCheckBoxAlert] = useState(false);
  //translate
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextModal({ globalLanguage });


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
    },
    {
      type: "input",
      key: "cpf",
      placeholder: translations.placeholderCPF,
    },
  ];

  const {
    mutate: postPixPayment,
    isPending: loadingPostPix,
    data: res,
  } = usePostPixPayment({
    onSuccess: () => {
      toast.success(translations.toastPostPixPayment);
    },
    onError: (err) => {
      toast.error(translations.toastPostPixPaymentError, err);
    },
  });

  const { cartItems: cartTress } = useCart();

  function onFormsSubmit(data) {
    const body = {
      transaction_amount: Number(price),
      email: data.email,
      number: data.cpf,
      description: `Compra de ${cartTress.length} árvore(s) no valor de R$ ${price}`,
    };
    postPixPayment(body);
  }

  const { clearCart } = useCart();
  const id_user = useAuthStore((state) => state?.auth?.user?._id);
  const { mutate: createCertificate } = useCreateCertificate({
    onSuccess: () => {
      toast.success("Compra efetuada com sucesso");
    },
  });

  useEffect(() => {
    if (res?.link) {
      setTimeout(() => {
        window.open(res.link);
      }, 3000);
    }
    if (res?.status === "approved") {
      createCertificate({ id_user: id_user, tree: cartTress });
      clearCart();
    }
  }, [res]);

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
                  <FormsText>{translations.formsTitle}</FormsText>
                  <FormSubmit
                    inputs={inputs}
                    onSubmit={onFormsSubmit}
                    schema={pixPaymentRequireSchema}
                    color={"#33603F"}
                    loading={loadingPostPix}
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
