export function TranslateTextHeader({ globalLanguage }) {

  let toastLoginMessage;
  let toastLogoffMessage;
  let toastErrorGoogleMessage;
  let menuTitle2;
  let menuTitle3;
  let menuTitle4;
  let menuTitle5;
  let menuTitle6;
  let textAdmin;

  if (globalLanguage === "EN") {
    toastLoginMessage = "Login Successful!";
    toastLogoffMessage = "User Logged Out Successfully!";
    toastErrorGoogleMessage = "Error When Logging In With Google";
    menuTitle2 = "Trees";
    menuTitle3 = "About";
    menuTitle4 = "Manage Users";
    menuTitle5 = "Manage Areas";
    menuTitle6 = "My Trees";
    textAdmin = "Administrator";
  } else if (globalLanguage === "PT") {
    toastLoginMessage = "Login Efetuado com Sucesso!";
    toastLogoffMessage = "Usuario Deslogado com Sucesso!";
    toastErrorGoogleMessage = "Erro ao Fazer Login com o Google";
    menuTitle2 = "Árvores";
    menuTitle3 = "Sobre";
    menuTitle4 = "Gerenciar Usuários";
    menuTitle5 = "Gerenciar Áreas";
    menuTitle6 = "Minhas Árvores";
    textAdmin = "Administrador";
  } else if (globalLanguage === "ES") {
    toastLoginMessage = "¡Inicio de sesión correcto!";
    toastLogoffMessage = "¡El usuario cerró sesión correctamente!";
    toastErrorGoogleMessage = "Error al iniciar sesión con Google";
    menuTitle2 = "Árboles";
    menuTitle3 = "Acerca de";
    menuTitle4 = "Administrar Usuarios";
    menuTitle5 = "Administrar Áreas";
    menuTitle6 = "Mis Arboles";
    textAdmin = "Administrador";

  }
  return {
    toastLoginMessage,
    toastLogoffMessage,
    toastErrorGoogleMessage,
    menuTitle2,
    menuTitle3,
    menuTitle4,
    menuTitle5,
    menuTitle6,
    textAdmin,
  };
}
