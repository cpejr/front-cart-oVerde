export function TranslateTextLogin({ globalLanguage }) {
  let title;
  let text;
  let register;
  let sign;
  let google;

  if (globalLanguage === "EN") {
    title = "ACCESS YOUR ACOUNT";
    text = "ENTER";
    register = "Still not registered?";
    sign = "CREATE ACCOUNT";
    google = "Sign up with";
  } else if (globalLanguage === "PT") {
    title = "ACESSE SUA CONTA";
    text = "ENTRAR";
    register = "Não possui cadastro?";
    sign = "CRIAR CONTA";
    google = "Entrar com";
  } else if (globalLanguage === "ES") {
    title = "ACCEDE A TU CUENTA";
    text = "ENTRAR";
    register = "¿No tienes registro?";
    sign = "CREAR UNA CUENTA";
    google = "Regístrate con";
  }

  return {
    title,
    text,
    register,
    sign,
    google,
  };
}
