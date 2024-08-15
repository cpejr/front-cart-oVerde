export function TranslateTextCart({ globalLanguage }) {
  let title;
  let value;
  let purchase;

  if (globalLanguage === "EN") {
    title = "SHOPPING CART";
    value = "TOTAL: US$";
    purchase = "COMPLETE PURCHASE";
  } else if (globalLanguage === "PT") {
    title = "CARRINHO DE COMPRAS";
    value = "TOTAL: RS$";
    purchase = "FECHAR COMPRA";
  } else if (globalLanguage === "ES") {
    title = "CARRITO DE COMPRAS";
    value = "TOTAL: €";
    purchase = "FECHAR COMPRA";
  }

  return {
    title,
    value,
    purchase,
  };
}
