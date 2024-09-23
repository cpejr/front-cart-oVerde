export function TranslateTextHeader({ globalLanguage }) {
  let textButton;

  if (globalLanguage === "EN") {
    textButton = "PIX";
  } else if (globalLanguage === "PT") {
    textButton = "PIX";
  } else if (globalLanguage === "ES") {
    textButton = "PIX";
  }

  return {
    textButton,
  };
}
