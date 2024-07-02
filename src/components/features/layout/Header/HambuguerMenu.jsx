import { useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Hamburguer } from "../Header/Styles";
import useAuthStore from "../../../../Stores/auth";

export default function HamburguerMenu() {
  const isAdmin = useAuthStore((state) => state?.auth?.user?.type);
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
      <MenuOutlined style={{ color: "white", fontSize: "25px" }} />,
      [
        getItem(" Nossa História", "/historia"),
        getItem("Acervo", "/minhas-arvores"),
        getItem("Quem somos", "/sobre"),
        getItem("Apoiar e contribuir", "/suporte"),
        ...(isAdmin
          ? [
              getItem("Usuários", "/gerenciar-usuarios"),
              getItem("Arquivos", "/gerenciar-arvores"),
            ]
          : []),
      ]
    ),
  ];

  function onClick(key) {
    if (key && key !== "login" && key !== "/story") {
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
