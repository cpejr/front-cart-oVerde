import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
import { Header, Footer } from "../../../../components";
import Con from "@assets/test.js";

export default function AppLayout() {
  Con("Boa tarde");
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}
