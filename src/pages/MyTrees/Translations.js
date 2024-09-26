export function TranslateTextHeader({ globalLanguage }) {
  let labelValid;
  let labelExpired;
  let toastLoadingItemsError;
  let buttonLoadCertificate;
  let pageTitle;
  let placeholderSearch;
  let placeholderOrder;
  let loading;

  if (globalLanguage === "EN") {
    labelValid = "Valid";
    labelExpired = "Expired";
    toastLoadingItemsError = "Error Loading Items";
    buttonLoadCertificate = "Download Certificate";
    pageTitle = "MY PROTECTED TREES";
    placeholderSearch = "Search";
    placeholderOrder = "Order by";
    loading = "Loading";
  } else if (globalLanguage === "PT") {
    labelValid = "Válidos";
    labelExpired = "Expirados";
    toastLoadingItemsError = "Erro ao carregar itens";
    buttonLoadCertificate = "Baixar Certificado";
    pageTitle = "MINHAS ÁRVORES PROTEGIDAS";
    placeholderSearch = "Pesquisar";
    placeholderOrder = "Ordenar por";
    loading = "Carregando";
  } else if (globalLanguage === "ES") {
    labelValid = "Válido";
    labelExpired = "Venció";
    toastLoadingItemsError = "Error al cargar elementos";
    buttonLoadCertificate = "Descargar Certificado";
    pageTitle = "MIS ÁRBOLES PROTEGIDOS";
    placeholderSearch = "Buscar";
    placeholderOrder = "Ordenar por";
    loading = "Cargando";
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
