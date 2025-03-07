import { Container, Title, Login, DivLogin, LoginLink } from "./Styles";
import { useState, useEffect } from "react";
import {
  TranslateTextRegister,
  TranslateRegisterToastError,
} from "./Translations";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { validationSchemaRegister } from "./Validators";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import { useCreateUser } from "../../hooks/querys/user";
export default function RegisterPage() {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextRegister({ globalLanguage });

  const { mutate: createUser, isPending: registerLoading } = useCreateUser({
    onSuccess: () => {
      toast.success(translations.toastCreate);
    },
    onError: (err) => {
      toast.error(
        TranslateRegisterToastError(globalLanguage, err.response.status)
      );
    },
  });
  const registerSubmit = (data) => {
    createUser(data);
  };
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
        onSubmit={registerSubmit}
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
        schema={validationSchemaRegister(globalLanguage)}
        color="blue"
        loading={false}
        alternativeText={translations.text}
      />
      <DivLogin>
        <Login>{translations.login}</Login>
        <LoginLink href="/login">{translations.sign}</LoginLink>
      </DivLogin>
    </Container>
  );
}
