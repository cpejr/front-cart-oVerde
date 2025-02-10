import {
  Container,
  Title,
  Register,
  DivRegister,
  RegisterLink,
} from "./Styles";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import { TranslateTextLogin } from "./Translations";
import { useGlobalLanguage } from "../../Stores/globalLanguage";

export default function LoginPage() {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextLogin({ globalLanguage });

  return (
    <Container>
      <Title>{translations.title}</Title>
      <FormSubmit
        inputs={[
          {
            key: "email",
            type: "login",
            placeholder: "E-mail",
            showEyeIcon: false,
          },
          {
            key: "senha",
            type: "login",
            placeholder: "Senha",
            showEyeIcon: true,
          },
        ]}
        onSubmit={(data) => console.log("Dados enviados:", data)}
        schema={null}
        color="blue"
        loading={false}
      />
      <DivRegister>
        <Register>{translations.register}</Register>
        <RegisterLink href="/cadastro">{translations.sign}</RegisterLink>
      </DivRegister>
    </Container>
  );
}
