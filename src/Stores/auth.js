import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

const useAuthStore = create(
  (set, get) => ({
    auth: null,
    setAuth: (accessToken) => {
      const { user, exp } = jwtDecode(accessToken);
      console.log("oi", exp);
      set({ auth: { accessToken, user, expireIn: exp } });
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
