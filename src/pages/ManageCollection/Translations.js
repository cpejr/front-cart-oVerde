export function TranslateText({ globalLanguage }) {
  let textName;
  let textDescription;
  let textLocation;
  let textSpecie;
  let textPrice;
  let textArchive;
  let textManage;
  let textCategory;
  let toastGetTreeError;
  let toastGetCategoryError;
  let toastPostTreeSucess;
  let toastPostTreeError;
  let toastDeleteTreeSucess;
  let toastDeleteTreeError;
  let toastUpdateTreeSucess;
  let toastUpdateTreeError;
  let pageTitle;
  let pageSubTitle;
  let loading;

  //utils
  let nameRequired;
  let shortName;
  let longName;
  let descriptionRequired;
  let shortDescription;
  let locationRequired;
  let shortLocation;
  let specieRequired;
  let shortSpecie;
  let priceRequired;

  if (globalLanguage === "EN") {
    textName = "Name";
    textDescription = "Description";
    textLocation = "Location";
    textSpecie = "Specie";
    textPrice = "Price";
    textArchive = "Add Photo";
    textManage = "Manage";
    textCategory = "Choose the category";
    toastGetTreeError = "Error picking up items";
    toastGetCategoryError = "Error when getting categories";
    toastPostTreeSucess = "Registered tree!";
    toastPostTreeError = "Error registering a tree.";
    toastDeleteTreeSucess = "Tree deleted successfully!";
    toastDeleteTreeError = "Error deleting tree.";
    toastUpdateTreeSucess = "Tree updated successfully!";
    toastUpdateTreeError = "Error updating tree.";
    pageTitle = "ADD NEW TREE";
    pageSubTitle = "MANAGE TREES";
    loading = "Loading";

    //utils
    nameRequired = "name is required";
    shortName = "the name needs two or more characters";
    longName = "name exceeds character limit";
    descriptionRequired = "description is required";
    shortDescription = "required field";
    locationRequired = "location is required";
    shortLocation = "required field";
    specieRequired = "specie is required";
    shortSpecie = "required field";
    priceRequired = "price is required";
  } else if (globalLanguage === "PT") {
    textName = "Nome";
    textDescription = "Descrição";
    textLocation = "Localização";
    textSpecie = "Espécie";
    textPrice = "Valor";
    textArchive = "Adicionar Foto";
    textManage = "Gerenciar";
    textCategory = "Escolha a categoria";
    toastGetTreeError = "Erro ao pegar itens";
    toastGetCategoryError = "Erro ao pegar categorias";
    toastPostTreeSucess = "Árvore cadastrada!";
    toastPostTreeError = "Erro ao cadastrar uma árvore.";
    toastDeleteTreeSucess = "Árvore excluída com sucesso!";
    toastDeleteTreeError = "Erro ao excluir árvore.";
    toastUpdateTreeSucess = "Árvore atualizada com sucesso!";
    toastUpdateTreeError = "Erro ao atualizar árvore.";
    pageTitle = "ADICIONAR NOVA ÁRVORE";
    pageSubTitle = "GERENCIAR ÁRVORES";
    loading = "Carregando";

    //utils
    nameRequired = "nome é obrigatório";
    shortName = "o nome precisa de dois ou mais caracteres";
    longName = "nome excede o limite de caracteres";
    descriptionRequired = "descrição é obrigatória";
    shortDescription = "campo obrigatório";
    locationRequired = "localização é obrigatória";
    shortLocation = "campo obrigatório";
    specieRequired = "espécie é obrigatória";
    shortSpecie = "campo obrigatório";
    priceRequired = "preço é obrigatório";
  } else if (globalLanguage === "ES") {
    textName = "Nombre";
    textDescription = "Descripción";
    textLocation = "Ubicación";
    textSpecie = "Especies";
    textPrice = "Valor";
    textArchive = "Añadir foto";
    textManage = "Administrar";
    textCategory = "Elige la categoría";
    toastGetTreeError = "Error al recoger artículos";
    toastGetCategoryError = "Error al obtener categorías";
    toastPostTreeSucess = "¡Árbol registrado!";
    toastPostTreeError = "Error al registrar un árbol.";
    toastDeleteTreeSucess = "¡Árbol eliminado con éxito!";
    toastDeleteTreeError = "Error al eliminar el árbol.";
    toastUpdateTreeSucess = "¡Árbol actualizado exitosamente!";
    toastUpdateTreeError = "Error al actualizar el árbol.";
    pageTitle = "AÑADIR NUEVO ÁRBOL";
    pageSubTitle = "GESTIONAR ÁRBOLES";
    loading = "Cargando";

    //utils
    nameRequired = "el nombre es obligatorio";
    shortName = "el nombre necesita dos o más caracteres";
    longName = "el nombre excede el límite de caracteres";
    descriptionRequired = "la descripción es obligatoria";
    shortDescription = "campo obligatorio";
    locationRequired = "la ubicación es obligatoria";
    shortLocation = "campo obligatorio";
    specieRequired = "especie es obligatoria";
    shortSpecie = "campo obligatorio";
    priceRequired = "el precio es obligatorio";
  }

  return {
    textName,
    textDescription,
    textLocation,
    textSpecie,
    textPrice,
    textArchive,
    textManage,
    textCategory,
    toastGetTreeError,
    toastGetCategoryError,
    toastPostTreeSucess,
    toastPostTreeError,
    toastDeleteTreeSucess,
    toastDeleteTreeError,
    toastUpdateTreeSucess,
    toastUpdateTreeError,
    pageTitle,
    pageSubTitle,
    loading,
    nameRequired,
    shortName,
    longName,
    descriptionRequired,
    shortDescription,
    locationRequired,
    shortLocation,
    specieRequired,
    shortSpecie,
    priceRequired,
  };
}
