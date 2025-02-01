import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

import {
  Home,
  ManageCollection,
  ManageUsers,
  AboutUs,
  BuyTrees,
  MyTrees,
  CartPage,
  RegisterPage,
} from "@pages";
import { AppLayout } from "@components";
import useAuthStore from "@Stores/auth";

function PrivateAdminRoutes() {
  const auth = useAuthStore((state) => state?.auth?.user?.type);
  const { pathname: from } = useLocation();

  return !auth ? <Navigate to="/" state={{ from }} /> : <Outlet></Outlet>;
}

function LoggegRoutes() {
  const auth = useAuthStore((state) => state?.auth);
  const { pathname: from } = useLocation();
  return !auth ? <Navigate to="/" state={{ from }} /> : <Outlet></Outlet>;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<AboutUs />} />
        <Route path="comprar-arvores" element={<BuyTrees />} />
        <Route path="carrinho" element={<CartPage />} />
        <Route path="cadastro" element={<RegisterPage />} />
        <Route element={<PrivateAdminRoutes />}>
          <Route path="gerenciar-arvores" element={<ManageCollection />} />
          <Route path="gerenciar-usuarios" element={<ManageUsers />} />
        </Route>
        <Route element={<LoggegRoutes />}>
          <Route path="minhas-arvores" element={<MyTrees />} />
        </Route>
      </Route>
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
