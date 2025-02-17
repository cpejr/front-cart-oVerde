import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchemaRegister } from "./Validators";
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
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { register, 
    handleSubmit, 
    formState: { errors }, 
    reset }
     = useForm({resolver: zodResolver(validationSchemaRegister()),
  });

  const handleFormSubmit = (data) => {
    reset();
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
        {errors.senha && <PasswordErrorMessage>{errors.senha.message}</PasswordErrorMessage>}
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
      <InputRegister type={type} {...register(inputKey)} placeholder={placeholder} />
            {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      

    </DivPassword>
  );
}
