import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getMemorial,
  deleteMemorial,
  updateMemorial,
  postMemorial,
} from "../../services/endpoints";

export function useGetMemorial({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["memorial"],
    queryFn: () => getMemorial(),
    onSuccess,
    onError,
  });
}

export function useDeleteMemorial({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: deleteMemorial,
    onSuccess,
    onError,
  });
}

export function useUpdateMemorial({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: updateMemorial,
    onSuccess,
    onError,
  });
}

export function usePostMemorial({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: postMemorial,
    onSuccess,
    onError,
  });
}
