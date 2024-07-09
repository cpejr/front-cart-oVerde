import { getCategoryTrees, getCategoryTreesByName } from '@endpoints';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export function useGetCategoryType({
  filters,
  onSuccess = () => {},
  onError = (err) => toast.error(err),
} = {}) {
  return useQuery({
    queryKey: ['categoryType', filters],
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
    queryKey: ['categoryType', name],
    queryFn: () => getCategoryTreesByName(name),
    onSuccess,
    onError,
  });
}
