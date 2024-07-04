import { useQuery, useMutation } from "@tanstack/react-query";

import {
  getAllCertificates,
  createCertificate,
  getCertificateByUser,
  deleteCertificate,
  updateCertificate,
} from "@endpoints";

export function useGetAllCertificates({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["certificate"],
    queryFn: getAllCertificates,
    onSuccess,
    onError,
  });
}

export function useCreateCertificate({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  newCertificate,
} = {}) {
  return useMutation({
    mutationFn: () => createCertificate(newCertificate),
    onSuccess,
    onError,
  });
}

export function useGetCertificateByUser({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  id,
  type,
} = {}) {
  return useQuery({
    queryKey: ["personalCertificate", { id, type }],
    queryFn: () => getCertificateByUser({ id, type }),
    onSuccess,
    onError,
  });
}

export function useDeleteCertificate({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  _id,
} = {}) {
  return useMutation({
    mutationFn: () => deleteCertificate(_id),
    onSuccess,
    onError,
  });
}

export function useUpdateCertificate({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  _id,
  newCertificateData,
} = {}) {
  return useMutation({
    mutationFn: () => updateCertificate({ _id, newCertificateData }),
    onSuccess,
    onError,
  });
}
