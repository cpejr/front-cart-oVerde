export function TranslateTextHeader({ globalLanguage }) {
    let textDate;
    let textName;
    let placeholderType;
    let placeholderOlder;
    let placeholderPrice;
    let buttonClear;
    let buttonFilter;
  
    if (globalLanguage === 'EN') {
        textName = 'Name';
        textDate = 'Date';
        placeholderType = 'Choose the type';
        placeholderPrice = 'Choose the price';
        placeholderOlder = 'Order By';
        buttonFilter = 'Filter';
        buttonClear = 'Clear Filters';

    } else if (globalLanguage === 'PT') {
        textName = 'Nome';
        textDate = 'Data';
        placeholderType = 'Escolha o tipo';
        placeholderPrice = 'Escolha o preço';
        placeholderOlder = 'Ordenar Por';
        buttonFilter = 'Filtrar';
        buttonClear = 'Limpar Filtros';
    }

    return {
      textName,
      textDate,
      placeholderType,
      placeholderOlder,
      placeholderPrice,
      buttonFilter,
      buttonClear,
    };
  }