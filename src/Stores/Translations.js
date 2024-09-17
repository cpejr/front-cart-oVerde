export function TranslateTextCart({ globalLanguage }) {
  let toastAddedMessage;
  let toastRemovedMessage;
  let toastCleanedMessage;

  if (globalLanguage === "EN") {
    toastAddedMessage = "Added to cart successfully!";
    toastRemovedMessage = "Successfully removed from cart!";
    toastCleanedMessage = "Cart successfully cleaned!";
  } else if (globalLanguage === "PT") {
    toastAddedMessage = "Adicionado no carrinho com sucesso!";
    toastRemovedMessage = "Removido do carrinho com sucesso!";
    toastCleanedMessage = "Carrinho limpo com sucesso!";
  } else if (globalLanguage === "ES") {
    toastAddedMessage = "¡Añadido al carrito con éxito!";
    toastRemovedMessage = "¡Eliminado exitosamente del carrito!";
    toastCleanedMessage = "¡Carrito limpiado exitosamente!";
  }

  return {
    toastAddedMessage,
    toastRemovedMessage,
    toastCleanedMessage,
  };
}
