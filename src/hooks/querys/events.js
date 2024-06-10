import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getEvents,
  createEvents,
  getEventsByCategoryId,
  deleteEvents,
  updateEvents,
} from "../../services/api/endpoints";

export function useGetEvents({
  filters,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["events", filters],
    queryFn: () => getEvents(filters),
    onSuccess,
    onError,
  });
}

export function useCreateEvents({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: createEvents, onSuccess, onError });
}

export function useDeleteEvents({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: deleteEvents, onSuccess, onError });
}

export function useUpdateEvents({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: updateEvents, onSuccess, onError });
}
export function useGetEventsByCategoryId({
  id,
  name,
  type,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["events", { id, name, type }],
    queryFn: () => getEventsByCategoryId({ id, name, type }),
    onSuccess,
    onError,
  });
}
