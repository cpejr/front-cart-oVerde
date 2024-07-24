export function TranslateTextHeader({ globalLanguage }) {
    let labelValid;
    let labelExpired;
    let toastLoadingItemsError;
    let buttonLoadCertificate;
    let pageTitle;
    let placeholderSearch;
    let placeholderOrder;
    let loading;
  
    if (globalLanguage === 'EN') {
        labelValid = 'Valid';
        labelExpired = 'Expired';
        toastLoadingItemsError = 'Error Loading Items';
        buttonLoadCertificate = 'Download Certificate';
        pageTitle = 'MY TREES';
        placeholderSearch = 'Search';
        placeholderOrder = 'Order by';
        loading = 'Loading';

    } else if (globalLanguage === 'PT') {
        labelValid = 'Válidos';
        labelExpired = 'Expirados';
        toastLoadingItemsError = 'Erro ao carregar itens';
        buttonLoadCertificate = 'Baixar Certificado';
        pageTitle = 'MINHAS ÁRVORES';
        placeholderSearch = 'Pesquisar';
        placeholderOrder = 'Ordenar por';
        loading = 'Carregando';
    }

    return {
      labelValid,
      labelExpired,
      toastLoadingItemsError,
      buttonLoadCertificate,
      pageTitle,
      placeholderOrder,
      placeholderSearch,
      loading,
    };
  }