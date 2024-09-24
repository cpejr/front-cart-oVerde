import PropTypes, { bool } from "prop-types";
import { ButtonPix } from "./Styles";
import { PixIcon } from "@assets/index";

export default function PixButton({ func }) {
  //translations

  return (
    <ButtonPix onClick={() => func()}>
      PIX
      <img src={PixIcon} alt="PixIcon" />
    </ButtonPix>
  );
}

PixButton.propTypes = {
  func: PropTypes.func.isRequired,
};
