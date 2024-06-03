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
  Collection,
  Support,
  Events,
  ManageCollection,
  ManageEvents,
  ManageUsers,
  Story,
  AboutUs,
  Memorial,
} from "./pages";
import { AppLayout } from "./components";
import useAuthStore from "./Stores/auth";

function PrivateAdminRoutes() {
  const auth = useAuthStore((state) => state?.auth?.user?.type);
  const { pathname: from } = useLocation();

  return !auth ? <Navigate to="/" state={{ from }} /> : <Outlet></Outlet>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="historia" element={<Story />} />
        <Route path="sobre" element={<AboutUs />} />
        <Route path="memorial" element={<Memorial />} />
        <Route path="eventos" element={<Events />} />
        <Route element={<PrivateAdminRoutes />}>
          <Route path="gerenciar-memorial" element={<ManageCollection />} />
          <Route path="gerenciar-eventos" element={<ManageEvents />} />
          <Route path="gerenciar-usuarios" element={<ManageUsers />} />
        </Route>
      </Route>
      <Route path="suporte" element={<Support />} />
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
