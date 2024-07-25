export function TranslateTextHeader({ globalLanguage }) {
    let textMessage;
    let textButton;
  
    if (globalLanguage === 'EN') {
        textMessage = 'Are you sure you want to delete the item?';
        textButton = 'Delete';

    } else if (globalLanguage === 'PT') {
        textMessage = 'Tem certeza que deseja excluir o item?';
        textButton = 'Excluir';

    }

    return {
      textMessage,
      textButton,
    };
  }