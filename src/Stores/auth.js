import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      auth: null,
      setAuth: (accessToken) => {
        const { user } = jwtDecode(accessToken);
        set({ auth: { accessToken, user } });
      },
      getToken: () => {
        return get().auth?.accessToken;
      },
      setUser: (user) =>
        set((state) => ({
          auth: { ...state?.auth, user },
        })),
      clearAuth: () => set({ auth: null }),
    }),
    {
      name: "AuthData",
    }
  )
);

export default useAuthStore;
