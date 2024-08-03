import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { PrimereactStyles } from "./styles/PrimereactStyles.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { PrimeReactProvider } from "primereact/api";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (import.meta.env.VITE_NODE_ENV === "production") {
  disableReactDevTools();
}
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "react-toastify/dist/ReactToastify.css";
import DemoCarousel from "./components/features/Carousel/Carousel.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: import.meta.env.VITE_STALE_TIME || 300000,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider></PrimeReactProvider>
      <GlobalStyles />

      <PrimereactStyles />
      <AppProvider />
      <ReactQueryDevtools />
    </QueryClientProvider>
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
    />
  </React.StrictMode>
);
