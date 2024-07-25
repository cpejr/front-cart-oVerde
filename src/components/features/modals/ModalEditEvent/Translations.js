export function TranslateTextHeader({ globalLanguage }) {
    let textName;
    let textImage;
    let textURL;
    let textShortDescription;
    let textLongDescription;
    let textLink;
    let textLink2;
    let textCaracter;
    let textButton;
  
    if (globalLanguage === 'EN') {
        textName = 'Event name:';
        textImage = 'Event image:';
        textURL = 'Image URL:';
        textShortDescription = 'Short description:';
        textLongDescription = 'Long description:';
        textLink = 'Event link:';
        textLink2 = 'Link:';
        textCaracter = 'Choose the features';
        textButton = 'Edit';

    } else if (globalLanguage === 'PT') {
        textName = 'Nome do evento:';
        textImage = 'Imagem do evento:';
        textURL = 'URL da imagem:';
        textShortDescription = 'Descrição curta:';
        textLongDescription = 'Descrição longa:';
        textLink = 'Link do evento:';
        textLink2 = 'Link:';
        textCaracter = 'Escolha as características';
        textButton = 'Editar';

    }

    return {
      textName,
      textImage,
      textShortDescription,
      textLongDescription,
      textURL,
      textLink,
      textLink2,
      textCaracter,
      textButton,
    };
  }