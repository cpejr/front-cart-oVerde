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
} from "./Styles";
import { useState } from "react";
import Button from "../../components/common/Button/Button";
import { TranslateTextLogin } from "./Translations";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextLogin({ globalLanguage });

  return (
    <Container>
      <Title>{translations.title}</Title>
      <InputsDiv>
        <InputDefault placeholder="E-mail" />
        <DivPassword>
          <InputPassword
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Icon onClick={togglePasswordVisibility}>
            {showPassword ? <OpenedEye /> : <ClosedEye />}
          </Icon>
        </DivPassword>
      </InputsDiv>
      <GoogleButton>
        <GoogleIcon />
        {translations.google}{" "}
        <strong style={{ marginLeft: "7px" }}>Google</strong>
      </GoogleButton>
      <Button marginTop="30px" marginBottom="30px">
        {translations.text}
      </Button>
      <DivRegister>
        <Register>{translations.register}</Register>
        <RegisterLink href="/cadastro">{translations.sign}</RegisterLink>
      </DivRegister>
    </Container>
  );
}
