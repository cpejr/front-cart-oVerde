export function TranslateTextHeader({ globalLanguage }) {
    let textColumn1;
    let textColumn2;
    let textColumn3;
    let textColumn4;
    let textAdmin;
    let textUser;
    let toastDeleteError;
    let toastDeleteSucess;
    let toastGetError;
    let toastUpdateError;
    let toastUpdateSucess;
    let pageTitle;
    let placeholderSearch;
  
    if (globalLanguage === 'EN') {
        textColumn1 = 'Photo';
        textColumn2 = 'Name';
        textColumn3 = 'Email';
        textColumn4 = 'Type';
        textAdmin = 'Administrator';
        textUser = 'User';
        toastDeleteSucess = 'User deleted successfully!';
        toastDeleteError = 'Error deleting user.';
        toastUpdateSucess = 'User updated successfully!';
        toastUpdateError = 'Error updating user.';
        toastGetError = 'Error picking up items';
        pageTitle = 'MANAGE USERS';
        placeholderSearch = 'Search user';

    } else if (globalLanguage === 'PT') {
        textColumn1 = 'Foto';
        textColumn2 = 'Nome';
        textColumn3 = 'Email';
        textColumn4 = 'Tipo';
        textAdmin = 'Administrador';
        textUser = 'Usuário';
        toastDeleteSucess = 'Usuário deletado com sucesso!';
        toastDeleteError = 'Erro ao excluir usuário.';
        toastUpdateSucess = 'Usuário atualizado com sucesso!';
        toastUpdateError = 'Erro ao atualizar usuário.';
        toastGetError = 'Erro ao pegar itens';
        pageTitle = 'GERENCIAR USUÁRIOS';
        placeholderSearch = 'Pesquisar usuário';

    } else if (globalLanguage === 'ES') {
      textColumn1 = 'Fotografía';
      textColumn2 = 'Nombre';
      textColumn3 = 'Correo electrónico';
      textColumn4 = 'Tipo';
      textAdmin = 'Administrador';
      textUser = 'Usuario';
      toastDeleteSucess = '¡Usuario eliminado exitosamente!';
      toastDeleteError = 'Error al eliminar usuario.';
      toastUpdateSucess = 'Usuario actualizado exitosamente!';
      toastUpdateError = 'Error al actualizar el usuario.';
      toastGetError = 'Error al recoger artículos';
      pageTitle = 'GESTIONAR USUARIOS';
      placeholderSearch = 'Buscar usuario';
      
  }

    return {
      textColumn1,
      textColumn2,
      textColumn3,
      textColumn4,
      textAdmin,
      textUser,
      toastDeleteSucess,
      toastDeleteError,
      toastGetError,
      toastUpdateError,
      toastUpdateSucess,
      pageTitle,
      placeholderSearch,
    };
  }