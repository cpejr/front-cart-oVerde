import PropTypes, { bool } from "prop-types";
import { useState } from "react";
import { ButtonPix } from "./Styles";
import { PixIcon } from "@assets/index";
import { useGlobalLanguage } from "../../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";

export default function PixButton({ func }) {
  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  const onSubmit = () => {
    func();
  };

  return (
    <ButtonPix onClick={onSubmit}>
      {translations.textButton}
      <img src={PixIcon} alt="PixIcon" />
    </ButtonPix>
  );
}

PixButton.propTypes = {
  func: PropTypes.func.isRequired,
};
