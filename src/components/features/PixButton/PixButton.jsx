import PropTypes, { bool } from "prop-types";
import { ButtonPix } from "./Styles";
import { PixIcon } from "@assets/index";
import { useGlobalLanguage } from "../../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";

export default function PixButton({ func }) {
  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  return (
    <ButtonPix onClick={() => func()}>
      {translations.textButton}
      <img src={PixIcon} alt="PixIcon" />
    </ButtonPix>
  );
}

PixButton.propTypes = {
  func: PropTypes.func.isRequired,
};
