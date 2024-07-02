// Libs
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// Components
import { Container, City, PrimeHeader } from "./Styles";
import { LogoCidade } from "@assets/index";
import useAuthStore from "@Stores/auth";
import { LoginSocialArea } from "@components";
import { HamburgerMenu } from "../../../index";

export default function Header() {
  const isAdmin = useAuthStore((state) => state?.auth?.user?.type);
  const navigate = useNavigate();

  const items = [
    {
      label: "História",
      url: "/historia",
    },
    {
      label: "Árvores",
      url: "/minhas-arvores",
    },
    {
      label: "Sobre",
      url: "/sobre",
    },
    {
      label: "Apoiar",
      url: "/suporte",
    },
    ...(isAdmin
      ? [
          {
            label: "Administrador",
            items: [
              {
                label: "Gerenciar usuários",
                url: "/gerenciar-usuarios",
              },
              {
                label: "Gerenciar árvores",
                url: "/gerenciar-arvores",
              },
            ],
          },
        ]
      : []),
  ];

  return (
    <Container>
      <City src={LogoCidade} onClick={() => navigate("/")}></City>
      <PrimeHeader model={items} />
      <HamburgerMenu />
      <LoginSocialArea />
    </Container>
  );
}
