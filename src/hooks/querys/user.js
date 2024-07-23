import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getUsers,
  deleteUser,
  updateUser,
  login,
  refresh,
} from "../../services/api/endpoints";
import useAuthStore from "../../Stores/auth";
export function useGetUsers({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    onSuccess,
    onError,
  });
}
export function useDeleteUsers({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess,
    onError,
  });
}
export function useUpdateUsers({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: updateUser,
    onSuccess,
    onError,
  });
}

export function useLogin({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: login,
    onError,
    onSuccess,
  });
}

export function useRefreshToken({ onSuccess = () => {} } = {}) {
  const expireIn = useAuthStore((state) => state.auth?.expireIn);

  const clearAuth = useAuthStore((state) => state.clearAuth);
  const onError = (err) => {
    console.error(err);
    clearAuth();
  };

  return useQuery({
    queryKey: ["refresh"],
    queryFn: refresh,
    onError,
    onSuccess,
    refetchInterval: expireIn, // Milliseconds
  });
}
