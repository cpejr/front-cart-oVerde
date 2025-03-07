import { useState } from "react";
import { TranslateTextRegister } from "../../../pages/RegisterPage/Translations";
import { useGlobalLanguage } from "../../../Stores/globalLanguage"; 

import {
  Container,
  InputsDiv,
  DivPassword,
  InputPassword,
  Icon,
  ClosedEye,
  OpenedEye,
  PasswordErrorMessage,
  ErrorMessage,
  GoogleButton,
  GoogleIcon,
  InputRegister,
} from "./Styles";

export default function FormRegister({
  showEyeIcon = true,
  showGoogleButton = true,
  placeholder,
  inputKey,
  type,
  register,
  errors,
  
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { globalLanguage } = useGlobalLanguage();

  const translations = TranslateTextRegister({ globalLanguage });

  return type === "password" ? (
    <Container>
      <InputsDiv>
        <DivPassword>
          <InputPassword
            {...register(inputKey)}
            type={passwordVisible ? "text" : "password"}
            placeholder={placeholder}
          />
          {showEyeIcon && (
            <Icon onClick={togglePasswordVisibility}>
              {passwordVisible ? <OpenedEye /> : <ClosedEye />}
            </Icon>
          )}
        </DivPassword>
        {inputKey == "senha" && errors.senha && <PasswordErrorMessage>{errors.senha.message}</PasswordErrorMessage>}
        {showGoogleButton && (
          <GoogleButton>
            <GoogleIcon />
            {translations.google} <strong style={{ marginLeft: "7px" }}>Google</strong>
          </GoogleButton>
        )}
      </InputsDiv>
    </Container>
  ) : (
    <DivPassword>
  <InputRegister
    type={type}
    {...register(inputKey)}
    placeholder={placeholder}
  />
  
  {inputKey === "nome" && errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
  {inputKey === "email" && errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
</DivPassword>

  );
}
