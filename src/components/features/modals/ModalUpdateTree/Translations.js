export function TranslateTextHeader({ globalLanguage }) {
    let textName;
    let textLocation;
    let textDescription;
    let textSpecie;
    let textPrice;
    let textArchive;
  
    if (globalLanguage === 'EN') {
        textName = 'Change Name';
        textLocation = 'Change Location';
        textDescription = 'Change Description';
        textSpecie = 'Change Specie';
        textPrice = 'Change Price';
        textArchive = 'Add Photo';

    } else if (globalLanguage === 'PT') {
        textName = 'Mudar Nome';
        textLocation = 'Mudar Localização';
        textDescription = 'Mudar Descrição';
        textSpecie = 'Mudar Espécie';
        textPrice = 'Mudar Preço';
        textArchive = 'Adicionar Foto';

    } else if (globalLanguage === 'ES') {
      textName = 'Cambiar nombre';
      textLocation = 'Cambiar locación';
      textDescription = 'Cambiar Descripción';
      textSpecie = 'Cambiar especie';
      textPrice = 'Cambio de precio';
      textArchive = 'Añadir foto';

  }

    return {
      textName,
      textLocation,
      textDescription,
      textSpecie,
      textPrice,
      textArchive,
    };
  }