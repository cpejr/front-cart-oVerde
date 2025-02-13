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
  import { useState } from "react";
  import Button from "../../components/common/Button/Button";
  import { TranslateTextRegister } from "./Translations";
  import { useGlobalLanguage } from "../../Stores/globalLanguage";
  import { validationSchemaRegister } from "./Validators";
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import  FormSubmit from "../../components/features/FormSubmit/FormSubmit";
  
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
            type: "text",
            placeholder: "Nome",
            showEyeIcon: false,
          },
          {
            key: "email",
            type: "email",
            placeholder: "E-mail",
            showEyeIcon: false,
          },
          {
            key: "senha",
            type: "password",
            placeholder: "Senha",
            showEyeIcon: true,
          },
          {
            key: "confirmarSenha",
            type: "password",
            placeholder: "Confirmar Senha",
            showEyeIcon: true,
          },
        ]}
        onSubmit={(data) => console.log("Dados enviados:", data)}
        schema={validationSchemaRegister()}
        color="blue"
        loading={false}
      />
       
        <DivLogin>
          <Login>{translations.login}</Login>
          <LoginLink href="/login">{translations.sign}</LoginLink>
        </DivLogin>
      </Container>
    );
  }
  