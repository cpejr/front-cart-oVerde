import PropTypes from "prop-types";
import { TranslateCertificate } from "./Translations";
import { Certificated, Title, Text, Heading, Footer } from "./Styles";
import { useGlobalLanguage } from "../../../Stores/globalLanguage";
const Certificate = ({ card }) => {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateCertificate({ globalLanguage });
  console.log(card?.years);
  return (
    <Certificated id="certificated">
      <Title>{translations.CertificateTitle1}</Title>
      <Title>{translations.CertificateTitle2}</Title>

      <Heading>
        <Text>
          {translations.ClientName}
          {card?.id_user?.name}
        </Text>
        <Text>
          {translations.CertificateNumber}
          {card?._id}
        </Text>
        <Text>
          {translations.EmissionDate}
          {card?.createdAt}
        </Text>
        <Text>
          {translations.TreeLocation}
          {card?.id_tree?.location}
        </Text>
      </Heading>

      <Text>
        {translations.Text1Pt1}
        {card?.id_user?.name}
        {translations.Text1Pt2}
        {card?.id_tree?._id}
        {translations.Text1Pt3}
        {card?.years}
        {translations.Text1Pt4}
      </Text>
      <Text>{translations.Text2}</Text>
      <Text>{translations.Concession}</Text>
      <Text>{translations.ConcessionText}</Text>

      <Footer>
        <Text>{translations.Signature}</Text>
        <Text>{translations.Representant}</Text>
        <Text>{translations.Contact}</Text>
        <Text>{translations.Email}</Text>
        <Text>{translations.PhoneNumber}</Text>
        <Text>{translations.Website}</Text>
      </Footer>
    </Certificated>
  );
};
export default Certificate;

Certificate.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string,
    years: PropTypes.number,
    createdAt: PropTypes.string,
    id_user: PropTypes.shape({
      name: PropTypes.string,
    }),
    id_tree: PropTypes.shape({
      _id: PropTypes.string,
      location: PropTypes.string,
    }),
  }),
};

Certificate.defaultProps = {
  card: null,
};
