import { signInWithGooglePopup } from "./firebase";
import { useLogin, useLogout } from "../hooks/querys/user";
import useAuthStore from "../Stores/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TranslateTextModal } from "./Translation";
import { useGlobalLanguage } from "../Stores/globalLanguage";

export const useGoogleLogin = () => {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextModal({ globalLanguage });

  const { auth } = useAuthStore();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();
  const { mutate: login } = useLogin({
    onSuccess: () => {
      toast.success(translations.toastLogin);
    },
    onError: (err) => toast.error(err),
  });
  const { mutate: logout } = useLogout({
    onSuccess: () => {
      toast.success(translations.toastLogoff);
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
        navigate("/");
      }
    } catch (error) {
      toast.error("Erro ao tentar fazer login com o Google");
    }
  };

  return {
    logGoogleUser,
  };
};
