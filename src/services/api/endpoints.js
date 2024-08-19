import useAuthStore from "../../Stores/auth";
import api from "./api";
/**************************
 *                        *
 *         User           *
 *                        *
 **************************/

export async function getUsers() {
  const { data } = await api.get("/user");
  return data;
}

export async function deleteUser(_id) {
  const { data } = await api.delete(`/user/${_id}`);

  return data;
}
export async function login(credentials) {
  const { setAuth } = useAuthStore.getState();
  const { data } = await api.post("/user", credentials);
  setAuth(data.accessToken);
  return data;
}

export async function updateUser({ _id, newUserData }) {
  const { data } = await api.put(`/user/${_id}`, newUserData);

  return data;
}

export async function refresh() {
  const { setAuth } = useAuthStore.getState();
  const { data } = await api.get("/refresh");
  setAuth(data.accessToken);
  return data;
}

export async function logout() {
  const { data } = await api.delete("/refresh");
  return data;
}

/**************************
 *                        *
 *     Category Tree      *
 *                        *
 **************************/
export const getCategoryTrees = async (filters = {}) => {
  const { data } = await api.get("/categoryTree", { params: filters });
  return data;
};

export const getCategoryTreesByName = async (name) => {
  const { data } = await api.get("/categoryTree/search-by-name", {
    params: { name },
  });
  return data;
};

/**************************
 *                        *
 *         Tree           *
 *                        *
 **************************/

export async function getTree() {
  const { data } = await api.get("/tree");

  return data;
}

export async function deleteTree(_id) {
  const { data } = await api.delete(`/tree/${_id}`);
  return data;
}

export async function updateTree({ _id, newData }) {
  const newPrice = parseFloat(newData?.price);
  const newTree = { ...newData, price: newPrice };
  const { data } = await api.put(`/tree/${_id}`, newTree);
  return data;
}

export async function postTree(newTrees) {
  const newprice = parseFloat(newTrees?.price);
  const tree = { ...newTrees, price: newprice };
  const { data } = await api.post(`/tree`, tree);

  return data;
}

/**************************
 *                        *
 *      Certificate       *
 *                        *
 **************************/

export async function getAllCertificates() {
  const { data } = await api.get("/certificate");
  return data;
}

export async function createCertificate(newCertificate) {
  const { data } = await api.post("/certificate", newCertificate);
  return data;
}

export async function getCertificateByUser({ id, type }) {
  const { data } = await api.get(`/certificate/${id}`, { type: { type } });
  return data;
}

export async function deleteCertificate(_id) {
  const { data } = await api.delete(`/certificate/${_id}`);
  return data;
}

export async function updateCertificate({ _id, newCertificateData }) {
  const { data } = await api.put(`/certificate/${_id}`, newCertificateData);
  return data;
}

/**************************
 *                        *
 *         Archive        *
 *                        *
 **************************/

export async function getArchives(archives) {
  const { data } = await api.get(`/archive`, { params: { archive: archives } });
  return data;
}
