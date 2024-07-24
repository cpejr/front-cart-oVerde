export function TranslateTextHeader({ globalLanguage }) {
    let labelRecent;
    let labelOld;
    let labelCheap;
    let labelExpensive;
    let loadingErrorMessage;
    let textButton;
    let pageTitle;
    let placeholderSearch;
    let placeholderFilter;
    let loadingTitle;
  
    if (globalLanguage === 'EN') {
        labelRecent = 'More Recent';
        labelOld = 'Oldest';
        labelCheap = 'Cheaper';
        labelExpensive = 'More Expensive';
        loadingErrorMessage = 'Error Loading Items';
        textButton = 'Buy Certificate';
        pageTitle = 'BUY TREES';
        placeholderSearch = 'Search';
        placeholderFilter = 'Filter by';
        loadingTitle = 'Loading';

    } else if (globalLanguage === 'PT') {
        labelRecent = 'Mais Recentes';
        labelOld = 'Mais Antigas';
        labelCheap = 'Mais Baratas';
        labelExpensive = 'Mais Caras';
        loadingErrorMessage = 'Erro ao carregar itens';
        textButton = 'Comprar Certificado';
        pageTitle = 'COMPRAR ÁRVORES';
        placeholderSearch = 'Pesquisar';
        placeholderFilter = 'Filtrar por';
        loadingTitle = 'Carregando';
    }

    return {
      labelRecent,
      labelOld,
      labelCheap,
      labelExpensive,
      loadingErrorMessage,
      textButton,
      pageTitle,
      placeholderSearch,
      placeholderFilter,
      loadingTitle,
    };
  }