export function TranslateTextHeader({ globalLanguage }) {
    let successMessage;
  
    if (globalLanguage === 'EN') {
        successMessage = "Purchase completed successfully";

    } else if (globalLanguage === 'PT') {
        successMessage = "Compra realizada com sucesso";

    } else if (globalLanguage === 'ES') {
        successMessage = "Compra realizada con éxito";
      
  }

    return {
      successMessage,
    };
  }