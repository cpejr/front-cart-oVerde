export function TranslateTextModal({ globalLanguage }) {
  let Title;
  let WelcomeTitle;
  let WelcomeText;
  let Acceptance1;
  let Acceptance1Text;
  let UseofSite;
  let UseofSiteText;
  let IntellectualProperty;
  let IntellectualPropertyText;
  let Privacy;
  let PrivacyText;
  let LimitationofLiability;
  let LimitationofLiabilityText;
  let LinkstoThirdPartySites;
  let LinkstoThirdPartySitesText;
  let GoverningLaw;
  let GoverningLawText;
  let Contact;
  let ContactText;
  let Acceptance2;
  let Acceptance2Text;
  let select;
  let checkboxText;
  let termsAcceptText;
  let placeholderEmail;
  let placeholderCPF;
  let toastPostPixPayment;
  let toastPostPixPaymentError;
  let formsTitle;
  let toastSuccessPurchase;

  if (globalLanguage == "EN") {
    toastSuccessPurchase = "Purchase completed successfully";
    Title = "Terms of Acceptance and Privacy";
    WelcomeTitle = "Welcome to the Standing Forest Green Card website.";
    WelcomeText =
      "By accessing and using this website, you agree to the terms and conditions described below:";
    Acceptance1 = "1.Acceptance of Terms:";
    Acceptance1Text =
      "By using the Standing Forest Green Card website, you agree to comply with all the terms and conditions set forth in this acceptance of terms. These terms may be periodically modified, and continued use of the site will imply acceptance of the changes made.";
    UseofSite = "2.Use of the Site:";
    UseofSiteText =
      "This site is intended for personal and informational use. Any commercial use of the content presented here, without proper authorization, is strictly prohibited. You agree not to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from this site.";
    IntellectualProperty = "3.Personal Data:";
    IntellectualPropertyText =
      "All content on this site, including text, images, graphics, logos, icons, videos, audios, and other materials, is protected by copyright laws and other intellectual property laws. Unauthorized use of the content may violate these laws and result in civil and criminal penalties.";
    Privacy = "3.Personal Data:";
    PrivacyText =
      "Standing Forest Green Card values your privacy. Information collected during site navigation or interactions will be treated according to our Privacy Policy, available on the website.";
    LimitationofLiability = "4.Limitation of Liability";
    LimitationofLiabilityText =
      "Standing Forest Green Card is not responsible for direct, indirect, incidental, consequential, or punitive damages resulting from the use or inability to use this site. The company does not guarantee that the site will be error-free or uninterrupted, nor that any information provided will be accurate or complete.";
    LinkstoThirdPartySites = "5. Application Low:";
    LinkstoThirdPartySitesText =
      "This site may contain links to third-party websites, which are provided solely for the convenience of the user. Standing Forest Green Card does not endorse or is responsible for the content of these sites, nor for any damages or losses resulting from their use.";
    GoverningLaw = "Governing Law";
    GoverningLawText =
      "This acceptance of terms is governed by the laws of the Federative Republic of Brazil. Any disputes arising from the use of the site will be submitted to the competent courts of Brazil.";
    Contact = "6.Privacy and Contact";
    ContactText =
      "If you have any questions about this acceptance of terms or about the Standing Forest Green Card website, please contact us via email [Contact Email] or phone [Contact Phone Number].";
    Acceptance2 = "6. Privacy and Contact";
    Acceptance2Text =
      "By clicking 'I Accept' or continuing to use this website, you acknowledge that you have read, understood, and agree to be bound by all the terms and conditions set forth in this acceptance of terms.";
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
    toastSuccessPurchase = "Compra efetuada com sucesso";
    Title = "Termo de Aceite e Privacidade";

    WelcomeTitle = "Bem-vindo ao site da Cartão Verde Floresta em Pé.";
    WelcomeText =
      "Ao acessar e utilizar este site, você concorda com os termos e condições descritos abaixo. Caso não concorde com algum dos termos, solicitamos que não utilize este site.";
    Acceptance1 = " Aceitação dos Termos";
    Acceptance1Text =
      "Ao utilizar o site da Cartão Verde Floresta em Pé, você concorda em cumprir todos os termos e condições estabelecidos neste termo de aceite. Estes termos poderão ser alterados periodicamente, e o uso contínuo do site implicará na aceitação das alterações realizadas.";
    UseofSite = "Uso do Site";
    UseofSiteText =
      "Este site destina-se ao uso pessoal e informativo. Qualquer uso comercial do conteúdo aqui apresentado, sem a devida autorização, é estritamente proibido. Você concorda em não modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer informação, software, produtos ou serviços obtidos neste site.";
    IntellectualProperty = "Propriedade Intelectual";
    IntellectualPropertyText =
      "Todo o conteúdo deste site, incluindo textos, imagens, gráficos, logotipos, ícones, vídeos, áudios e outros materiais, é protegido por leis de direitos autorais e outras leis de propriedade intelectual. O uso não autorizado do conteúdo pode violar essas leis e resultar em sanções civis e criminais.";
    Privacy = "Privacidade";
    PrivacyText =
      "A Cartão Verde Floresta em Pé valoriza sua privacidade. As informações coletadas durante a navegação no site ou em interações serão tratadas conforme a nossa Política de Privacidade, disponível no site.";
    LimitationofLiability = "Limitação de Responsabilidade";
    LimitationofLiabilityText =
      "A Cartão Verde Floresta em Pé não se responsabiliza por danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou da incapacidade de usar este site. A empresa não garante que o site estará livre de erros ou interrupções, nem que qualquer informação disponibilizada será precisa ou completa.";
    LinkstoThirdPartySites = "Links para Sites de Terceiros";
    LinkstoThirdPartySitesText =
      "Este site pode conter links para sites de terceiros, que são fornecidos apenas para conveniência do usuário. A Cartão Verde Floresta em Pé não endossa nem é responsável pelo conteúdo desses sites, nem por quaisquer danos ou perdas decorrentes do uso dos mesmos.";
    GoverningLaw = "Lei Aplicável";
    GoverningLawText =
      "Este termo de aceite é regido pelas leis da República Federativa do Brasil. Quaisquer disputas decorrentes do uso do site serão submetidas aos tribunais competentes do Brasil.";
    Contact = "Contato";
    ContactText =
      "Em caso de dúvidas sobre este termo de aceite ou sobre o site da Cartão Verde Floresta em Pé, entre em contato conosco através do e-mail [Email de Contato] ou telefone [Telefone de Contato].";
    Acceptance2 = "Aceite dos Termos";
    Acceptance2Text =
      "Ao clicar em 'Aceito' ou ao continuar utilizando este site, você reconhece que leu, entendeu e concorda em se submeter a todos os termos e condições estabelecidos neste termo de aceite.";

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
    toastSuccessPurchase = "Compra realizada con éxito.";
    Title = "Términos de Aceptación y privacidad";

    WelcomeTitle = "Bienvenido al sitio web de Tarjeta Verde Bosque en Pie.";
    WelcomeText =
      "Al acceder y utilizar este sitio web, usted acepta los términos y condiciones descritos a continuación. Si no está de acuerdo con alguno de estos términos, le solicitamos que no utilice este sitio web.";
    Acceptance1 = "Aceptación de los Términos";
    Acceptance1Text =
      "Al utilizar el sitio web de Tarjeta Verde Bosque en Pie, usted acepta cumplir con todos los términos y condiciones establecidos en esta aceptación de términos. Estos términos pueden ser modificados periódicamente, y el uso continuo del sitio implicará la aceptación de los cambios realizados.";
    UseofSite = "Uso del Sitio";
    UseofSiteText =
      "Este sitio está destinado a uso personal e informativo. Cualquier uso comercial del contenido aquí presentado, sin la debida autorización, está estrictamente prohibido. Usted acepta no modificar, copiar, distribuir, transmitir, exhibir, ejecutar, reproducir, publicar, licenciar, crear trabajos derivados, transferir o vender cualquier información, software, productos o servicios obtenidos en este sitio.";
    IntellectualProperty = "Propiedad Intelectual";
    IntellectualPropertyText =
      "Todo el contenido de este sitio, incluidos textos, imágenes, gráficos, logotipos, íconos, videos, audios y otros materiales, está protegido por leyes de derechos de autor y otras leyes de propiedad intelectual. El uso no autorizado del contenido puede violar estas leyes y resultar en sanciones civiles y penales.";
    Privacy = "Privacidad";
    PrivacyText =
      "Tarjeta Verde Bosque en Pie valora su privacidad. La información recopilada durante la navegación en el sitio o en interacciones será tratada de acuerdo con nuestra Política de Privacidad, disponible en el sitio web.";
    LimitationofLiability = "Limitación de Responsabilidad";
    LimitationofLiabilityText =
      "Tarjeta Verde Bosque en Pie no se responsabiliza por daños directos, indirectos, incidentales, consecuenciales o punitivos resultantes del uso o de la incapacidad de utilizar este sitio. La empresa no garantiza que el sitio estará libre de errores o interrupciones, ni que cualquier información proporcionada será precisa o completa.";
    LinkstoThirdPartySites = "Enlaces a Sitios de Terceros";
    LinkstoThirdPartySitesText =
      "Este sitio puede contener enlaces a sitios de terceros, que se proporcionan solo para la conveniencia del usuario. Tarjeta Verde Bosque en Pie no respalda ni es responsable del contenido de estos sitios, ni de cualquier daño o pérdida derivados del uso de los mismos.";
    GoverningLaw = "Ley Aplicable";
    GoverningLawText =
      "Esta aceptación de términos se rige por las leyes de la República Federativa de Brasil. Cualquier disputa derivada del uso del sitio será sometida a los tribunales competentes de Brasil.";
    Contact = "Contacto";
    ContactText =
      "En caso de dudas sobre esta aceptación de términos o sobre el sitio web de Tarjeta Verde Bosque en Pie, póngase en contacto con nosotros a través del correo electrónico [Correo Electrónico de Contacto] o teléfono [Número de Teléfono de Contacto].";
    Acceptance2 = "Aceptación de los Términos";
    Acceptance2Text =
      "Al hacer clic en 'Acepto' o continuar utilizando este sitio web, usted reconoce que ha leído, entendido y acepta someterse a todos los términos y condiciones establecidos en esta aceptación de términos.";

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
    WelcomeTitle,
    WelcomeText,
    Acceptance1,
    Acceptance1Text,
    UseofSite,
    UseofSiteText,
    IntellectualProperty,
    IntellectualPropertyText,
    Privacy,
    PrivacyText,
    LimitationofLiability,
    LimitationofLiabilityText,
    LinkstoThirdPartySites,
    LinkstoThirdPartySitesText,
    GoverningLaw,
    GoverningLawText,
    Contact,
    ContactText,
    Acceptance2,
    Acceptance2Text,
    select,
    checkboxText,
    termsAcceptText,
    placeholderEmail,
    placeholderCPF,
    toastPostPixPayment,
    toastPostPixPaymentError,
    formsTitle,
    toastSuccessPurchase,
  };
}
