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
  
    if (globalLanguage === 'EN') {
      textName = 'Name';
      textDescription = 'Description';
      textLocation = 'Location';
      textSpecie = 'Specie';
      textPrice = 'Price';
      textArchive = 'Add Photo';
      textManage = 'Manage';
      textCategory = 'Choose the category';
      toastGetTreeError = 'Error picking up items';
      toastGetCategoryError = 'Error when getting categories';
      toastPostTreeSucess = 'Registered tree!';
      toastPostTreeError = 'Error registering a tree.';
      toastDeleteTreeSucess = 'Tree deleted successfully!';
      toastDeleteTreeError = 'Error deleting tree.';
      toastUpdateTreeSucess = 'Tree updated successfully!';
      toastUpdateTreeError = 'Error updating tree.';
      pageTitle = 'ADD NEW TREE';
      pageSubTitle = 'MANAGE TREES';
      loading = 'Loading';

    } else if (globalLanguage === 'PT') {
        textName = 'Nome';
        textDescription = 'Descrição';
        textLocation = 'Localização';
        textSpecie = 'Espécie';
        textPrice = 'Valor';
        textArchive = 'Adicionar Foto';
        textManage = 'Gerenciar';
        textCategory = 'Escolha a categoria';
        toastGetTreeError = 'Erro ao pegar itens';
        toastGetCategoryError = 'Erro ao pegar categorias';
        toastPostTreeSucess = 'Árvore cadastrada!';
        toastPostTreeError = 'Erro ao cadastrar uma árvore.';
        toastDeleteTreeSucess = 'Árvore excluída com sucesso!';
        toastDeleteTreeError = 'Erro ao excluir árvore.';
        toastUpdateTreeSucess = 'Árvore atualizada com sucesso!';
        toastUpdateTreeError = 'Erro ao atualizar árvore.';
        pageTitle = 'ADICIONAR NOVA ÁRVORE';
        pageSubTitle = 'GERENCIAR ÁRVORES';
        loading = 'Carregando';

    } else if (globalLanguage === 'ES') {
      textName = 'Nombre';
      textDescription = 'Descripción';
      textLocation = 'Ubicación';
      textSpecie = 'Especies';
      textPrice = 'Valor';
      textArchive = 'Añadir foto';
      textManage = 'Administrar';
      textCategory = 'Elige la categoría';
      toastGetTreeError = 'Error al recoger artículos';
      toastGetCategoryError = 'Error al obtener categorías';
      toastPostTreeSucess = '¡Árbol registrado!';
      toastPostTreeError = 'Error al registrar un árbol.';
      toastDeleteTreeSucess = '¡Árbol eliminado con éxito!';
      toastDeleteTreeError = 'Error al eliminar el árbol.';
      toastUpdateTreeSucess = '¡Árbol actualizado exitosamente!';
      toastUpdateTreeError = 'Error al actualizar el árbol.';
      pageTitle = 'AÑADIR NUEVO ÁRBOL';
      pageSubTitle = 'GESTIONAR ÁRBOLES';
      loading = 'Cargando';
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
    };
  }