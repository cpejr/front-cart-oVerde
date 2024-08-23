import { signInWithGooglePopup } from "./firebase";
import { useLogin, useLogout } from "../hooks/querys/user";
import useAuthStore from "../Stores/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useGoogleLogin = () => {
  const { auth } = useAuthStore();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();
  const { mutate: login } = useLogin({
    onSuccess: () => {
      toast.success("Login realizado com sucesso");
    },
    onError: (err) => toast.error(err),
  });
  const { mutate: logout } = useLogout({
    onSuccess: () => {
      toast.success("Logoff realizado com sucesso");
      navigate("/");
    },
    onError: (err) => toast.error(err),
  });

  const logGoogleUser = async () => {
    try {
      if (!auth || !auth.accessToken) {
        const googleResponse = await signInWithGooglePopup();
        login({
          name: googleResponse?.user?.displayName,
          email: googleResponse?.user?.email,
          imageURL: googleResponse?.user?.photoURL,
        });
      } else {
        logout();
        clearAuth();
      }
    } catch (error) {
      toast.error("Erro ao tentar fazer login com o Google");
    }
  };

  return {
    logGoogleUser,
  };
};
