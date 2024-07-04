import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getTree,
  deleteTree,
  updateTree,
  postTree,
} from "../../services/api/endpoints";

export function useGetTree({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["tree"],
    queryFn: getTree,
    onSuccess,
    onError,
  });
}

export function useDeleteTree({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: deleteTree,
    onSuccess,
    onError,
  });
}

export function useUpdateTree({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: updateTree,
    onSuccess,
    onError,
  });
}

export function usePostTree({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: postTree,
    onSuccess,
    onError,
  });
}
