import {
  Container,
  Title,
  InputsDiv,
  InputDefault,
  DivPassword,
  InputPassword,
  Login,
  DivLogin,
  LoginLink,
  GoogleButton,
  GoogleIcon,
  Icon,
  ClosedEye,
  OpenedEye,
  ButtonsContainer,
  ErrorMessage, 
  PasswordErrorMessage,
} from "./Styles"; 
import { useState, useEffect } from "react";
import Button from "../../components/common/Button/Button";
import { TranslateTextRegister } from "./Translations";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { validationSchemaRegister } from "./Validators";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";

export default function CadastroPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextRegister({ globalLanguage });
  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm({
    resolver: zodResolver(validationSchemaRegister()),
  });

  const handleFormSubmit = (data) => {
    reset();
  };

  return (
    <Container>
      <Title>{translations.title}</Title>

      <FormSubmit 
        inputs={[
          {
            key: "nome",
            type: "register",
            placeholder: translations.name,
            showEyeIcon: false,
            showGoogleButton: false,
          },
          {
            key: "email",
            type: "register",
            placeholder: translations.email,
            showEyeIcon: false,
            showGoogleButton: false,
            
          },
          {
            key: "senha",
            type: "register",
            placeholder: translations.password,
            showEyeIcon: true,
            showGoogleButton: false,
          },
          {
            key: "confirmarSenha",
            type: "register",
            placeholder: translations.confirmPassword,
            showEyeIcon: true,
            showGoogleButton: true,
          },
        ]}
        
        onSubmit={handleFormSubmit}
        schema={validationSchemaRegister(globalLanguage)}
        color="blue"
        loading = {false}
        alternativeText={translations.text}
      />

       
      <DivLogin>
        <Login>{translations.login}</Login>
        <LoginLink href="/login">{translations.sign}</LoginLink>
      </DivLogin>
    </Container>
  );
}
