import { createPixPayment } from "../../services/api/endpoints";
import { useMutation } from "@tanstack/react-query";

export function usePostPixPayment({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: createPixPayment,
    onSuccess,
    onError,
  });
}
