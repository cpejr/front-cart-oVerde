export function TranslateTextHeader({ globalLanguage }) {
    let textMessage;
    let textButton;
  
    if (globalLanguage === 'EN') {
        textMessage = 'Are you sure you want to delete this event?';
        textButton = 'Delete';

    } else if (globalLanguage === 'PT') {
        textMessage = 'Tem certeza que deseja excluir esse evento?';
        textButton = 'Excluir';

    }

    return {
      textMessage,
      textButton,
    };
  }