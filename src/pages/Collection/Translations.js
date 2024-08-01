export function TranslateTextHeader({ globalLanguage }) {
    let text;
  
    if (globalLanguage === 'EN') {
        text = 'teste';

    } else if (globalLanguage === 'PT') {
        text = 'teste';

    } else if (globalLanguage === 'ES') {
      text = 'teste';
  }

    return {
      text,
    };
  }