// Libs
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// Components
import { Container, Logo, PrimeHeader } from './Styles';
import { LogoCV } from '@assets/index';
import useAuthStore from '@Stores/auth';
import { LoginSocialArea } from '@components';
import { HamburgerMenu } from '../../../index';
import { useGlobalLanguage } from '../../../../Stores/globalLanguage';
import { TranslateTextHeader } from './Translations';

export default function Header() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  const user = useAuthStore((state) => state?.auth?.user);
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: translations.menuTitle2,
      url: '/comprar-arvores',
    },
    {
      label: translations.menuTitle3,
      url: '/sobre',
    },
    ...(user?.type
      ? [
          {
            label: translations.textAdmin,
            items: [
              {
                label: translations.menuTitle4,
                url: '/gerenciar-usuarios',
              },
              {
                label: translations.menuTitle5,
                url: '/gerenciar-arvores',
              },
            ],
          },
        ]
      : []),
    ...(user
      ? [
          {
            label: translations.menuTitle6,
            url: '/minhas-arvores',
          },
        ]
      : []),
  ];

  return (
    <Container>
      <Logo src={LogoCV} onClick={() => navigate("/")}></Logo>
      <PrimeHeader model={items} />
      <HamburgerMenu />
      <LoginSocialArea />
    </Container>
  );
}
