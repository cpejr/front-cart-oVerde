import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import {
  getCategoryTrees,
  getCategoryTreesByName,
} from "../../services/api/endpoints";

export function useGetCategoryType({
  filters,
  onSuccess = () => {},
  onError = (err) => toast.error(err),
} = {}) {
  return useQuery({
    queryKey: ["categoryType", filters],
    queryFn: () => getCategoryTrees(filters),
    onSuccess,
    onError,
  });
}
export function useGetCategoryTypeByName({
  name,
  onSuccess = () => {},
  onError = (err) => toast.error(err),
} = {}) {
  return useQuery({
    queryKey: ["categoryType", name],
    queryFn: () => getCategoryTreesByName(name),
    onSuccess,
    onError,
  });
}
