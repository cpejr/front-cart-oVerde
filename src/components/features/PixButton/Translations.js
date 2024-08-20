export function TranslateTextHeader({ globalLanguage }) {
  let textButton;

  if (globalLanguage === "EN") {
    textButton = "Buy with PIX";
  } else if (globalLanguage === "PT") {
    textButton = "Pagar com PIX";
  } else if (globalLanguage === "ES") {
    textButton = "Pagar con PIX";
  }

  return {
    textButton,
  };
}
