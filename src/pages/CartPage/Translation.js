export function TranslateTextCart({ globalLanguage }) {
  let title;
  let value;
  let purchase;

  let placeholder;
  let selectPeriodWarning;

  if (globalLanguage === "EN") {
    title = "SHOPPING CART";
    value = "TOTAL: US$";
    purchase = "COMPLETE PURCHASE";
    selectPeriodWarning = "Please select a time period."; 
  } else if (globalLanguage === "PT") {
    title = "CARRINHO DE COMPRAS";
    value = "TOTAL: RS$";
    purchase = "FECHAR COMPRA";
    selectPeriodWarning = "Por favor, selecione o período de tempo."; 
  } else if (globalLanguage === "ES") {
    title = "CARRITO DE COMPRAS";
    value = "TOTAL: €";
    purchase = "COMPLETAR COMPRA";
    selectPeriodWarning = "Por favor, selecciona el período de tiempo.";
  }

  return {
    title,
    value,
    purchase,

    placeholder,
    selectPeriodWarning, 

  };
}
