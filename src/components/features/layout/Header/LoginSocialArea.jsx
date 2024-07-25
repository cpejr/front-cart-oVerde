import {
  CloseOutlined,
  LoadingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { GiShoppingCart } from 'react-icons/gi';
import { signInWithGooglePopup } from '../../../../services/firebase';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useLogin } from '../../../../hooks/querys/user';
import useAuthStore from '../../../../Stores/auth';
import { colors } from '../../../../styles/stylesVariables';
import { ModalLogOff } from '../../..';
import { IoIosArrowDown } from 'react-icons/io';
import {
  LoadingStyles,
  LoginButton,
  LoginSocial,
  ModalStyle,
  SocialMedias,
  ConteinerLogin,
  SocialImg,
  Select,
  Selected,
  LanguageSelector,
} from './Styles';
import { Whatsapp, Instagram, BrazilFlag, USAFlag } from '../../../../assets/index';
import { useGlobalLanguage } from '../../../../Stores/globalLanguage';
import { TranslateTextHeader } from './Translations';

export default function LoginSocialArea() {
  // Translations
  const { globalLanguage, setGlobalLanguage } = useGlobalLanguage();
  const [collapse, setCollapse] = useState(false);
  const availableLanguages = {'PT' : BrazilFlag, 'EN' : USAFlag};
  const translations = TranslateTextHeader({ globalLanguage });
  
  // Variables

  const { auth } = useAuthStore();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const user = useAuthStore((state) => state.auth?.user);
  const [loginLogoff, setLoginLogoff] = useState(
    auth?.accessToken ? 'Log Off' : 'Login',
  );
  const isLogged = auth?.accessToken ? true : false;
  const [profilePicture, setProfilePicture] = useState(
    loginLogoff === 'Login' ? (
      <UserOutlined />
    ) : (
      <img src={user?.imageURL} alt="Profile" />
    ),
  );
  const [modalLogOff, setModalLogOff] = useState(false);
  const openModalLogOff = () => setModalLogOff(true);
  const closeModalLogOff = () => setModalLogOff(false);
  const modalCloseButton = <CloseOutlined style={{ color: colors.white }} />;

  // BackEnd Calls

  const { mutate: login, isLoading } = useLogin({
    onSuccess: () => {
      toast.success(translations.toastLoginMessage);
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
        setLoginLogoff('Login');
      } else {
        clearAuth();
        toast.success(translations.toastLogoffMessage);
        setLoginLogoff('Log Off');
        setProfilePicture(<UserOutlined />);
      }
    } catch (error) {
      toast.error(translations.toastErrorGoogleMessage);
    }
  };

  return (
    <LoginSocial>
      <ConteinerLogin>
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
        <GiShoppingCart size={40} color="white" />
      </ConteinerLogin>
      <SocialMedias>
        <Select>
          <Selected onClick={() => setCollapse((prev) => !prev)}>
            <SocialImg>
              <img src={availableLanguages[globalLanguage]} width="28px"></img>
            </SocialImg>
            <IoIosArrowDown color='white'/>
          </Selected>
          <LanguageSelector collapse={+collapse}>
            {Object.entries(availableLanguages).map(([lang, flag]) => (
              <button
                type="button"
                key={lang}
                onClick={() => {
                  setGlobalLanguage(lang);
                  setCollapse((prev) => !prev);
                }}
                style={{ display: collapse ? 'flex' : 'none' }}
               >
                <SocialImg>
                  <img src={flag} width="28px"></img>
                </SocialImg>
              </button>
              ))}
          </LanguageSelector>
        </Select>
        <SocialImg href="https://www.instagram.com/prefeiturabd/">
          <img src={Instagram} alt="Logo Instagram" width="60%"></img>
        </SocialImg>
        <SocialImg href="http://wa.me/+31992740294">
          <img src={Whatsapp} alt="Logo Whatsapp" width="60%"></img>
        </SocialImg>
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
