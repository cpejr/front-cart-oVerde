export function TranslateText({ globalLanguage }) {
    let message;
  
    if (globalLanguage === 'EN') {
        message = 'No available options';

    } else if (globalLanguage === 'PT') {
        message = 'Nenhuma opção disponível';
    }

    return {
      message,
    };
  }