export function TranslateTextHeader({ globalLanguage }) {
  let checkboxText;
  let termsAcceptText;
  let placeholderEmail;
  let placeholderCPF;
  let toastPostPixPayment;
  let toastPostPixPaymentError;
  let formsTitle;

  if (globalLanguage === "EN") {
    checkboxText = "I agree to the terms described above";
    termsAcceptText = "Terms of Acceptance and privacy";
    placeholderEmail = "Enter your email";
    placeholderCPF = "Enter your CPF";
    toastPostPixPayment = "Payment link generated successfully!";
    toastPostPixPaymentError = "Error generating payment link..";
    formsTitle = "Fill in the form to generate the QR Code";
  } else if (globalLanguage === "PT") {
    checkboxText = "Eu concordo com os termos descritos acima";
    termsAcceptText = "Termo de Aceite e privacidade";
    placeholderEmail = "Digite seu email";
    placeholderCPF = "Digite seu CPF";
    toastPostPixPayment = "Link pagamento gerado com sucesso!";
    toastPostPixPaymentError = "Erro ao gerar link de pagamento.";
    formsTitle = "Preencha o formulário para gerar o QR Code";
  } else if (globalLanguage === "ES") {
    checkboxText = "Acepto los términos descritos anteriormente";
    termsAcceptText = "Términos de Aceptación y privacidad";
    placeholderEmail = "Introduzca su email";
    placeholderCPF = "Introduzca su CPF";
    toastPostPixPayment = "¡Enlace de pago generado exitosamente!";
    toastPostPixPaymentError = "Error al generar el enlace de pago.";
    formsTitle = "Rellena el formulario para generar el Código QR";
  }

  return {
    checkboxText,
    termsAcceptText,
    placeholderEmail,
    placeholderCPF,
    toastPostPixPayment,
    toastPostPixPaymentError,
    formsTitle,
  };
}
