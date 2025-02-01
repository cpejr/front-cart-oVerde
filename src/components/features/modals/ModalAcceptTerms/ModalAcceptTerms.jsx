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
  Estilo,
  Icones,
  GlobalStyle,
  Bottomimage,
  Paragraph
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
import { usePostPixPayment } from "../../../../hooks/querys/pixPayment";
import { useCart } from "../../../../Stores/CartContext";
import { useCreateCertificate } from "../../../../hooks/querys/certificate";
import useAuthStore from "../../../../Stores/auth";
import loguinho from "../../../../assets/loguinho/real.png";
import debaixo from  "../../../../assets/loguinho/debaixo.png";

export default function ModalAcceptTerms({ modal, onClose, price, years }) {
  //Tradução
  const { globalLanguage } = useGlobalLanguage();

  const [accept, setAccept] = useState(false);
  const [isPix, setIsPix] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [checkBoxAlert, setCheckBoxAlert] = useState(false);

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
      toast.success(translations.toastSuccessPurchase);
    },
  });

  useEffect(() => {
    if (res?.link && res?.status !== "approved") {
      setTimeout(() => {
        window.open(res.link);
      }, 3000);
    }
    if (res?.status === "approved") {
      createCertificate({ id_user: id_user, tree: cartTress, years: years });
      clearCart();
    }
  }, [res]);

  return (
    <>
    <GlobalStyle />
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
                years={years}
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
    <Icones style={{ display: "flex"}} >
    <Image>
    <img src={LogoVerde} alt="Logo Verde" />
    </Image>
     <Estilo>
    <img src={loguinho} alt="Loguinho"  />
      </Estilo>
     </Icones>
      <Container>
        <Header>{translations.Title}</Header>
        <Section>
          <Paragraph style={{ fontWeight: 'bold' }}>{translations.WelcomeTitle}</Paragraph>
          <Paragraph>{translations.WelcomeText}</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>{translations.Acceptance1}</Paragraph>
          <Paragraph>{translations.Acceptance1Text}</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>{translations.UseofSite}</Paragraph>
          <Paragraph>{translations.UseofSiteText}</Paragraph>
          <Paragraph>{translations.IntellectualPropery }</Paragraph>
          <Paragraph>{translations.IntellectualPropertyText}</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>{translations.Privacy}</Paragraph>
          <Paragraph>{translations.PrivacyText}</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>{translations.LimitationofLiability}</Paragraph>
          <Paragraph>{translations.LimitationofLiabilityText}</Paragraph>
        </Section>

        <Section>
          <Paragraph style={{ fontWeight: 'bold' }}>{translations.LinkstoThirdPartySites}</Paragraph>
          <Paragraph>{translations.LinkstoThirdPartySitesText}</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>{translations.Contact}</Paragraph>
          <Paragraph>{translations.ContactText}</Paragraph>
          <Paragraph>{translations.Acceptance2Text}</Paragraph>
        </Section>
        <CheckboxLabel alert={checkBoxAlert}>
          <StyledCheckBox
            className="custom-checkbox"
            onChange={toggleAccept}
            checked={accept}
          />
          {translations.select}
        </CheckboxLabel>
      <Bottomimage>
        <img src={debaixo} alt="De baixo" />
      </Bottomimage>
      </Container>
    </Modal>
    </>
  );
}

//props validation
ModalAcceptTerms.propTypes = {
  modal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  years: PropTypes.number,
};
