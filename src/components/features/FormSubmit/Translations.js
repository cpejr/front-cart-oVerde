export function TranslateText({ globalLanguage }) {
    let button;
  
    if (globalLanguage === 'EN') {
        button = 'Send';

    } else if (globalLanguage === 'PT') {
        button = 'Enviar';

    } else if (globalLanguage === 'ES') {
        button = 'Mandar';
    }

    return {
        button,
    };
  }