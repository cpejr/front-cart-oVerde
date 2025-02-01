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
    } = useForm({
      resolver: zodResolver(validationSchemaRegister()), 
    });
  
 
    const onSubmit = (data) => {
      console.log("Dados enviados:", data);
    };
  
    return (
      <Container>
        <Title>{translations.title}</Title>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputsDiv>
           
            <div>
              <InputDefault
                placeholder={translations.name}
                {...register("name")}
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </div>
           
            <div>
              <InputDefault
                placeholder="E-mail"
                {...register("email")}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </div>
           
            <DivPassword>
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <InputPassword
                  placeholder="Senha"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
              
              <Icon onClick={togglePasswordVisibility}>
                {showPassword ? <OpenedEye /> : <ClosedEye />}
              </Icon>
              </div>
             
            </DivPassword>
            {errors.password && <PasswordErrorMessage>{errors.password.message}</PasswordErrorMessage>}
            
            <DivPassword>
              <InputPassword
                placeholder="Confirmar Senha"
                type={showConfirmPassword ? "text" : "password"}
              />
              <Icon onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <OpenedEye /> : <ClosedEye />}
              </Icon>
            </DivPassword>
          </InputsDiv>
          
          <ButtonsContainer>
            <GoogleButton>
              <GoogleIcon />
              {translations.google} <strong style={{ marginLeft: "7px" }}>Google</strong>
            </GoogleButton>
  
            <Button marginTop="30px" marginBottom="30px" type="submit">
              {translations.text}
            </Button>
          </ButtonsContainer>
        </form>
       
        <DivLogin>
          <Login>{translations.login}</Login>
          <LoginLink href="/login">{translations.sign}</LoginLink>
        </DivLogin>
      </Container>
    );
  }
  