export function TranslateTextRegister({ globalLanguage }) {
  let title;
  let name;
  let email;
  let password;
  let confirmPassword;
  let google;
  let login;
  let sign;
  let text;
  let nameMinError;
  let emailError;
  let passwordMinError;
  let toastCreate;

  if (globalLanguage === "EN") {
    title = "CREATE ACCOUNT";
    name = "Name";
    email = "E-mail";
    password = "Password";
    confirmPassword = "Confirm Password";
    google = "Sign up with ";
    text = "REGISTER";
    login = "Already have an account?";
    sign = "LOG IN";
    nameMinError = "The name cannot be blank";
    emailError = "The email is invalid";
    toastCreate = "User registered successfully!";
    passwordMinError = "The password must contain at least 5 characters";
  } else if (globalLanguage === "PT") {
    title = "CRIAR CONTA";
    name = "Nome";
    email = "E-mail";
    password = "Senha";
    confirmPassword = "Confirmar senha";
    google = "Cadastrar com o ";
    text = "CADASTRAR";
    sign = "ENTRAR";
    login = "Já possui cadastro?";
    nameMinError = "O nome não pode estar em branco";
    emailError = "O email está inválido";
    toastCreate = "Usuário cadastrado com sucesso!";
    passwordMinError = "A senha deve conter pelo menos 5 caracteres";
  } else if (globalLanguage === "ES") {
    title = "CREAR UNA CUENTA";
    name = "Nombre";
    toastCreate = "Usuario registrado exitosamente!";
    email = "Correo electrónico";
    password = "Contraseña";
    confirmPassword = "Confirmar contraseña";
    google = "Regístrate con ";
    text = "REGISTRAR";
    login = "¿Ya tienes una cuenta?";
    sign = "ENTRAR";
    nameMinError = "El nombre no puede estar en blanco";
    emailError = "El correo electrónico es inválido";
    passwordMinError = "La contraseña debe contener al menos 5 caracteres";
  }

  return {
    title,
    name,
    email,
    password,
    confirmPassword,
    google,
    login,
    sign,
    text,
    nameMinError,
    emailError,
    passwordMinError,
    toastCreate,
  };
}
export function TranslateRegisterToastError(globalLanguage, errorCode) {
    if (errorCode === 500) {
      if (globalLanguage === "PT") {
        return "Erro ao realizar o cadastro. Tente novamente!";
      }
      if (globalLanguage === "EN") {
        return "Error when registering. Try again!";
      }
      if (globalLanguage === "ES") {
        return "Error al registrarse. ¡Intentar otra vez!";
      }
    }
    if (errorCode === 409) {
      if (globalLanguage === "PT") {
        return "Usuário já cadastrado!";
      }
      if (globalLanguage === "EN") {
        return "User already registered!";
      }
      if (globalLanguage === "ES") {
        return "Usuario ya registrado!";
      }
    }
  }