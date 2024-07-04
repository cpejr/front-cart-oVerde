import { useQuery } from "@tanstack/react-query";
import { getArchives } from "@endpoints";

export function useGetArchives({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  id,
  name,
} = {}) {
  return useQuery({
    queryKey: [name],
    queryFn: () => getArchives(id),
    onSuccess,
    onError,
  });
}
