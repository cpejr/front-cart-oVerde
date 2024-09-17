export function TranslateTextModal({ globalLanguage }) {
    let toastLogIn;
    let toastLogOff;
    
  
    if (globalLanguage == "EN") {
        toastLogIn = "Login completed successfully";
        toastLogIn = "Logoff completed successfully";
      
    } else if (globalLanguage == "PT") {
        toastLogIn = "Login realizado com sucesso";
        toastLogIn = "Logoff realizado com sucesso";
      
    } else if (globalLanguage == "ES") {
        toastLogIn = "Lnicio de sesión realizado con éxito";
        toastLogIn = "Cierre de sesión realizado con éxito";
    }
  
    return {
      toastLogOff,
      toastLogIn,
    };
  }