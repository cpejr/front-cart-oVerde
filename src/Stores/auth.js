import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

const useAuthStore = create(
  (set, get) => ({
    auth: null,
    setAuth: (accessToken) => {
      console.log(accessToken);
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
);

export default useAuthStore;
