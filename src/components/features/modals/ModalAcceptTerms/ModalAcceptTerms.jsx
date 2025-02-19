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
  Icones,
  GlobalStyle,
  Paragraph,
  Picture,
  Picture2,
  Last,
  Picture3,
  Final,
  ParagraphBLACK,
  Logo
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
import bottomimage from "../../../../assets/images/bottomimage.png";
import topimage from  "../../../../assets/images/topimage.png";

export default function ModalAcceptTerms({ modal, onClose, price, years }) {
  
  const { globalLanguage } = useGlobalLanguage();

  const [accept, setAccept] = useState(false);
  const [isPix, setIsPix] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [checkBoxAlert, setCheckBoxAlert] = useState(false);

  const showWarningImage = !accept;
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
            <Picture2 src={bottomimage} alt="Bottomimage" />
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
    <Icones>
    <Image>
    <Logo src={LogoVerde} alt="Logo" />
    </Image>
     <div>
     <Picture src={topimage} alt="topimage" />
    </div>
     </Icones>
      <Container>
        <Header>{translations.Title}</Header>
        <Section>
          <ParagraphBLACK>{translations.WelcomeTitle}</ParagraphBLACK>
          <Paragraph>{translations.WelcomeText}</Paragraph>
          <ParagraphBLACK>{translations.Acceptance1}</ParagraphBLACK>
          <Paragraph>{translations.Acceptance1Text}</Paragraph>
          <ParagraphBLACK>{translations.UseofSite}</ParagraphBLACK>
          <Paragraph>{translations.UseofSiteText}</Paragraph>
          <Paragraph>{translations.IntellectualPropery }</Paragraph>
          <Paragraph>{translations.IntellectualPropertyText}</Paragraph>
          <ParagraphBLACK>{translations.Privacy}</ParagraphBLACK>
          <Paragraph>{translations.PrivacyText}</Paragraph>
          <ParagraphBLACK>{translations.LimitationofLiability}</ParagraphBLACK>
          <Paragraph>{translations.LimitationofLiabilityText}</Paragraph>
        </Section>

        <Section>
          <ParagraphBLACK>{translations.LinkstoThirdPartySites}</ParagraphBLACK>
          <Paragraph>{translations.LinkstoThirdPartySitesText}</Paragraph>
          <ParagraphBLACK>{translations.Contact}</ParagraphBLACK>
          <Paragraph>{translations.ContactText}</Paragraph>
          <Paragraph>{translations.Acceptance2Text}</Paragraph>
        </Section>
        <Last>
        <CheckboxLabel alert={checkBoxAlert}>
          <StyledCheckBox
            className="custom-checkbox"
            onChange={toggleAccept}
            checked={accept}
          />
          {translations.select}
        </CheckboxLabel>
        {showWarningImage && (
          <Final>
              <Picture3 src={bottomimage} alt="bottoimage" />
          </Final>
            )}
        </Last>
      </Container>
    </Modal>
    </>
  );
}

ModalAcceptTerms.propTypes = {
  modal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  years: PropTypes.number,
};
