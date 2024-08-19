export function TranslateTextHeader({ globalLanguage }) {
    let textMessage;
    let textButton;
  
    if (globalLanguage === 'EN') {
        textMessage = 'Are you sure you want to quit?';
        textButton = 'Log Off';

    } else if (globalLanguage === 'PT') {
        textMessage = 'Tem certeza que deseja sair?';
        textButton = 'Sair';

    } else if (globalLanguage === 'ES') {
      textMessage = '¿Seguro que quieres salir?';
      textButton = 'Salir';

  }

    return {
      textMessage,
      textButton,
    };
  }