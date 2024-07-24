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
  
    if (globalLanguage === 'EN') {
        toastLoginMessage = 'Login Successful!';
        toastLogoffMessage = 'User Logged Out Successfully!';
        toastErrorGoogleMessage = 'Error When Logging In With Google';
        menuTitle2 = 'Trees';
        menuTitle3 = 'About';
        menuTitle4 = 'Manage Users';
        menuTitle5 = 'Manage Trees';
        menuTitle6 = 'My Trees';
        textAdmin = 'Administrator';

    } else if (globalLanguage === 'PT') {
        toastLoginMessage = 'Login Efetuado com Sucesso!';
        toastLogoffMessage = 'Usuario Deslogado com Sucesso!';
        toastErrorGoogleMessage = 'Erro ao Fazer Login com o Google';
        menuTitle2 = 'Árvores';
        menuTitle3 = 'Sobre';
        menuTitle4 = 'Gerenciar Usuários';
        menuTitle5 = 'Gerenciar Árvores';
        menuTitle6 = 'Minhas Árvores';
        textAdmin = 'Administrador';
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

