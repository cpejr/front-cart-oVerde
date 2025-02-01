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
        passwordMinError = "A senha deve conter pelo menos 5 caracteres";

    } else if (globalLanguage === "ES") {
        title = "CREAR UNA CUENTA";
        name = "Nombre";
        email = "Correo electrónico";
        password = "Contraseña";
        confirmPassword = "Confirmar contraseña";
        google = "Regístrate con ";
        text = "REGISTRAR";
        login = "¿Ya tienes una cuenta?";
        sign = "ENTRAR";
        nameMinError = "El nombre no puede estar en blanco";
        emailError = "El coreo electrónico es inválido";
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
    };
}
