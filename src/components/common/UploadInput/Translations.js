export function TranslateText({ globalLanguage }) {
    let remove;
    let addArchive;
    let errorMessage;
  
    if (globalLanguage === 'EN') {
        remove = 'Remove';
        errorMessage = 'At least one file must be sent';
        addArchive = 'Add file';

    } else if (globalLanguage === 'PT') {
        remove = 'Remover';
        errorMessage = 'Pelo menos um arquivo deve ser enviado';
        addArchive = 'Adicionar arquivo';

    } else if (globalLanguage === 'ES') {
      remove = 'Eliminar';
      errorMessage = 'Se debe enviar al menos un archivo';
      addArchive = 'Agregar archivo';
    }

    return {
      remove,
      addArchive,
      errorMessage,
    };
  }