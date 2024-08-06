export function TranslateText({ globalLanguage }) {
    let message;
  
    if (globalLanguage === 'EN') {
        message = 'No available options';

    } else if (globalLanguage === 'PT') {
        message = 'Nenhuma opção disponível';

    } else if (globalLanguage === 'ES') {
      message = 'No hay opciones disponibles';
  }

    return {
      message,
    };
  }