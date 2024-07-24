import { useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Hamburguer } from '../Header/Styles';
import useAuthStore from '../../../../Stores/auth';
import { useGlobalLanguage } from '../../../../Stores/globalLanguage';
import { TranslateTextHeader } from './Translations';

export default function HamburguerMenu() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  const isAdmin = useAuthStore((state) => state?.auth?.user?.type);
  const isLogged = useAuthStore((state) => state?.auth);
  const navigate = useNavigate();
  function getItem(label, key, icon, children, type, style) {
    return {
      key,
      icon,
      children,
      label,
      type,
      style,
    };
  }

  const menuItems = [
    getItem(
      '',
      'hamburger',
      <MenuOutlined style={{ color: '#BAFA53', fontSize: '25px' }} />,
      [
        getItem('Home', '/'),
        getItem(translations.menuTitle2, '/comprar-arvores'),
        getItem(translations.menuTitle3, '/sobre'),
        ...(isAdmin
          ? [
              getItem(translations.menuTitle4, '/gerenciar-usuarios'),
              getItem(translations.menuTitle5, '/gerenciar-arvores'),
            ]
          : []),
        ...(isLogged ? [getItem(translations.menuTitle6, '/minhas-arvores')] : []),
      ],
    ),
  ];

  function onClick(key) {
    if (key && key !== 'login') {
      navigate(key);
    }
  }
  return (
    <Hamburguer
      onClick={(e) => onClick(e.key)}
      mode="horizontal"
      items={menuItems}
      triggerSubMenuAction="click"
    />
  );
}
