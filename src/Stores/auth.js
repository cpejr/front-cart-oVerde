import { create } from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode"; 

const useAuthStore = create(
  persist(
    (set, get) => ({
      auth: null,
      setAuth: (accessToken) => {
        try {
          const { user, exp, iat } = jwtDecode(accessToken);
          set({ auth: { accessToken, user, expireIn: exp - iat } });
        } catch (error) {
          console.error("Erro ao decodificar token:", error);
          set({ auth: null });
        }
      },
      getToken: () => get().auth?.accessToken,
      setUser: (user) =>
        set((state) => ({
          auth: { ...state?.auth, user },
        })),
      clearAuth: () => set({ auth: null }),
    }),
    {
      name: "AuthData",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;