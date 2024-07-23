import { useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Hamburguer } from "../Header/Styles";
import useAuthStore from "../../../../Stores/auth";

export default function HamburguerMenu() {
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
      "",
      "hamburger",
      <MenuOutlined style={{ color: "#BAFA53", fontSize: "25px" }} />,
      [
        getItem("Home", "/"),
        getItem("Árvores", "/comprar-arvores"),
        getItem("Sobre", "/sobre"),
        ...(isAdmin
          ? [
              getItem("Gerenciar Usuários", "/gerenciar-usuarios"),
              getItem("Gerenciar Árvores", "/gerenciar-arvores"),
            ]
          : []),
        ...(isLogged ? [getItem("Minhas Árvores", "/minhas-arvores")] : []),
      ],
    ),
  ];

  function onClick(key) {
    if (key && key !== "login") {
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
