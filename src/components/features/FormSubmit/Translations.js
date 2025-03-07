export function TranslateText({ globalLanguage }) {
  let button;
  let google;

  if (globalLanguage === "EN") {
    button = "Send";
    google = "Sign up with";
  } else if (globalLanguage === "PT") {
    button = "Enviar";
    google = "Entrar com";
  } else if (globalLanguage === "ES") {
    button = "Mandar";
    google = "Regístrate con";
  }

  return {
    button,
    google,
  };
}
