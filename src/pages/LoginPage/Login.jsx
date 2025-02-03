import {
  Container,
  Title,
  InputsDiv,
  InputDefault,
  DivPassword,
  InputPassword,
  Register,
  DivRegister,
  RegisterLink,
  GoogleButton,
  GoogleIcon,
  Icon,
  ClosedEye,
  OpenedEye,
  DivButtons,
  DivEmail,
} from "./Styles";
import { useState } from "react";
import { colors } from "../../styles/stylesVariables";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/common/Button/Button";
import { TranslateTextLogin } from "./Translations";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { validador } from "./Utils";
import { Alert } from "../../components/common/Alert";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validador) });
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextLogin({ globalLanguage });

  return (
    <Container>
      <Title>{translations.title}</Title>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <InputsDiv>
          <DivEmail>
            <InputDefault
              placeholder="E-mail"
              error={errors}
              {...register("email")}
            />
            {!!errors?.email?.message && (
              <Alert style={{ paddingLeft: "20px" }}>
                {errors?.email?.message}
              </Alert>
            )}
          </DivEmail>
          <DivPassword>
            <InputPassword
              {...register("senha")}
              error={errors}
              placeholder="Senha"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!!errors?.senha?.message && (
              <Alert>{errors?.senha?.message}</Alert>
            )}
            <Icon onClick={togglePasswordVisibility}>
              {showPassword ? <OpenedEye /> : <ClosedEye />}
            </Icon>
          </DivPassword>
        </InputsDiv>
        <DivButtons>
          <GoogleButton>
            <GoogleIcon />
            {translations.google}{" "}
            <strong style={{ marginLeft: "7px" }}>Google</strong>
          </GoogleButton>
          <Button type="submit" marginTop="30px" marginBottom="30px">
            {translations.text}
          </Button>
        </DivButtons>
        <DivRegister>
          <Register>{translations.register}</Register>
          <RegisterLink href="/cadastro">{translations.sign}</RegisterLink>
        </DivRegister>
      </form>
    </Container>
  );
}
