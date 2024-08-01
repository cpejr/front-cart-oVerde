export function TranslateText({ globalLanguage }) {
    let button;
  
    if (globalLanguage === 'EN') {
        button = 'Send';

    } else if (globalLanguage === 'PT') {
        button = 'Enviar';
    }

    return {
        button,
    };
  }