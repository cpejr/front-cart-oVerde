export function TranslateTextHeader({ globalLanguage }) {
    let fileName;
    let title;
    let textConfirmation;
    let textOwner;
    let textAcquisitionDate;

  
    if (globalLanguage === 'EN') {
        fileName = 'certificate.pdf';
        title = 'Tree Ownership Certificate';
        textConfirmation = 'This certificate confirms that';
        textOwner = 'is the owner of the tree';
        textAcquisitionDate = 'Acquisition Date: '

    } else if (globalLanguage === 'PT') {
        fileName = 'certificado.pdf';
        title = 'Certificado de Posse de Árvore';
        textConfirmation = 'Este certificado confirma que ';
        textOwner = ' é o proprietário da árvore ';
        textAcquisitionDate = 'Data de Aquisição: '

    }

    return {
      fileName,
      title,
      textConfirmation,
      textOwner,
      textAcquisitionDate,
    };
  }