import {
  CloseOutlined,
  LoadingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { signInWithGooglePopup } from "../../../../services/firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { useLogin } from "../../../../hooks/querys/user";
import useAuthStore from "../../../../Stores/auth";
import { colors } from "../../../../styles/stylesVariables";
import { ModalLogOff } from "../../..";
import {
  LoadingStyles,
  LoginButton,
  LoginSocial,
  ModalStyle,
  SocialMedias,
} from "./Styles";
import {
  Login,
  LogoCidade,
  Whatsapp,
  Facebook,
  Instagram,
} from "../../../../assets/index";

export default function LoginSocialArea() {
  // Variables

  const { auth } = useAuthStore();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const user = useAuthStore((state) => state.auth?.user);
  const [loginLogoff, setLoginLogoff] = useState(
    auth?.accessToken ? "Fazer Logoff" : "Fazer Login"
  );
  const isLogged = auth?.accessToken ? true : false;
  const [profilePicture, setProfilePicture] = useState(
    loginLogoff === "Fazer Login" ? (
      <UserOutlined />
    ) : (
      <img src={user?.imageURL} alt="Profile" />
    )
  );
  const [modalLogOff, setModalLogOff] = useState(false);
  const openModalLogOff = () => setModalLogOff(true);
  const closeModalLogOff = () => setModalLogOff(false);
  const modalCloseButton = <CloseOutlined style={{ color: colors.white }} />;

  // BackEnd Calls

  const { mutate: login, isLoading } = useLogin({
    onSuccess: () => {
      toast.success("Login Efetuado com Sucesso!");
      setProfilePicture(<img src={user?.imageURL} alt="Profile" />);
    },
    onError: (err) => toast.error(err),
  });

  const logGoogleUser = async () => {
    try {
      if (auth === null || auth.accessToken === null) {
        const googleResponse = await signInWithGooglePopup();
        login({
          name: googleResponse?.user?.displayName,
          email: googleResponse?.user?.email,
          imageURL: googleResponse?.user?.photoURL,
        });
        setLoginLogoff("Fazer Logoff");
      } else {
        clearAuth();
        toast.success("Usuario Deslogado com Sucesso!");
        setLoginLogoff("Fazer Login");
        setProfilePicture(<UserOutlined />);
      }
    } catch (error) {
      toast.error("Error ao Fazer Login com o Google");
    }
  };

  return (
    <LoginSocial>
      {isLoading ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <LoginButton onClick={isLogged ? openModalLogOff : logGoogleUser}>
          {loginLogoff}
          {profilePicture}
        </LoginButton>
      )}
      <SocialMedias>
        <a href="https://www.instagram.com/prefeiturabd/">
          <img src={Instagram} alt="Logo Instagram" width="75%"></img>
        </a>
        <a href="https://www.facebook.com/prefeiturabd/?locale=pt_BR">
          <img src={Facebook} alt="Logo Facebook" width="75%"></img>
        </a>{" "}
        <a href="http://wa.me/+31992740294">
          <img src={Whatsapp} alt="Logo Whatsapp" width="75%"></img>
        </a>
      </SocialMedias>
      <ModalStyle
        open={modalLogOff}
        onCancel={closeModalLogOff}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalCloseButton}
        centered
        destroyOnClose
      >
        <ModalLogOff close={closeModalLogOff} handleLogOff={logGoogleUser} />
      </ModalStyle>
    </LoginSocial>
  );
}
