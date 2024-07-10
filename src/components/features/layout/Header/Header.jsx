// Libs
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// Components
import { Container, City, PrimeHeader } from './Styles';
import { LogoCidade } from '@assets/index';
import useAuthStore from '@Stores/auth';
import { LoginSocialArea } from '@components';
import { HamburgerMenu } from '../../../index';

export default function Header() {
  const user = useAuthStore((state) => state?.auth?.user);
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Árvores',
      url: '/comprar-arvores',
    },
    {
      label: 'Sobre',
      url: '/sobre',
    },
    ...(user?.type
      ? [
          {
            label: 'Administrador',
            items: [
              {
                label: 'Gerenciar usuários',
                url: '/gerenciar-usuarios',
              },
              {
                label: 'Gerenciar árvores',
                url: '/gerenciar-arvores',
              },
            ],
          },
        ]
      : []),
    ...(user
      ? [
          {
            label: 'Minhas árvores',
            url: '/minhas-arvores',
          },
        ]
      : []),
  ];

  return (
    <Container>
      <City src={LogoCidade} onClick={() => navigate('/')}></City>
      <PrimeHeader model={items} />
      <HamburgerMenu />
      <LoginSocialArea />
    </Container>
  );
}
