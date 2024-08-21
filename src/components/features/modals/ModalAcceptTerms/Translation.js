export function TranslateTextModal({ globalLanguage }) {
  let Title;
  let paragraph1;
  let paragraph2;
  let paragraph3;
  let paragraph4;
  let select;
  let checkboxText;
  let termsAcceptText;
  let placeholderEmail;
  let placeholderCPF;
  let toastPostPixPayment;
  let toastPostPixPaymentError;
  let formsTitle;

  if (globalLanguage == "EN") {
    Title = "Terms of Acceptance and Privacy";
    paragraph1 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph2 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph3 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph4 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    select = "I agree to the terms described above";
    checkboxText = "I agree to the terms described above";
    termsAcceptText = "Terms of Acceptance and privacy";
    placeholderEmail = "Enter your email";
    placeholderCPF = "Enter your CPF";
    toastPostPixPayment =
      "Payment link generated successfully, it will open automatically!";
    toastPostPixPaymentError = "Error generating payment link..";
    formsTitle = "Fill in the form to generate the QR Code";
  } else if (globalLanguage == "PT") {
    Title = "Termo de Aceite e privacidade";
    paragraph1 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph2 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph3 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph4 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    select = "Eu concordo com os termos descritos acima";
    checkboxText = "Eu concordo com os termos descritos acima";
    termsAcceptText = "Termo de Aceite e privacidade";
    placeholderEmail = "Digite seu email";
    placeholderCPF = "Digite seu CPF";
    toastPostPixPayment =
      "Link pagamento gerado com sucesso, ele abrirá automaticamente!";
    toastPostPixPaymentError = "Erro ao gerar link de pagamento.";
    formsTitle = "Preencha o formulário para gerar o QR Code";
  } else if (globalLanguage == "ES") {
    Title = "Términos de Aceptación y privacidad";
    paragraph1 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph2 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph3 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph4 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    select = "Acepto los términos descritos anteriormente";
    checkboxText = "Acepto los términos descritos anteriormente";
    termsAcceptText = "Términos de Aceptación y privacidad";
    placeholderEmail = "Introduzca su email";
    placeholderCPF = "Introduzca su CPF";
    toastPostPixPayment =
      "Enlace de pago generado exitosamente, ¡se abrirá automáticamente!";
    toastPostPixPaymentError = "Error al generar el enlace de pago.";
    formsTitle = "Rellena el formulario para generar el Código QR";
  }

  return {
    Title,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    select,
    checkboxText,
    termsAcceptText,
    placeholderEmail,
    placeholderCPF,
    toastPostPixPayment,
    toastPostPixPaymentError,
    formsTitle,
  };
}
