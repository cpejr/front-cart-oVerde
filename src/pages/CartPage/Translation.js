export function TranslateTextCart({ globalLanguage }) {
  let title;
  let value;
  let purchase;
  let placeholder;

  if (globalLanguage === "EN") {
    title = "SHOPPING CART";
    placeholder = "Select time period";
    value = "TOTAL: US$";
    purchase = "COMPLETE PURCHASE";
  } else if (globalLanguage === "PT") {
    title = "CARRINHO DE COMPRAS";
    placeholder = "Selecione o período de tempo";
    value = "TOTAL: RS$";
    purchase = "FECHAR COMPRA";
  } else if (globalLanguage === "ES") {
    title = "CARRITO DE COMPRAS";
    placeholder = "Selecciona el periodo de tiempo";
    value = "TOTAL: €";
    purchase = "COMPLETAR COMPRA";
  }

  return {
    title,
    value,
    purchase,
    placeholder,
  };
}
