import useAuthStore from "../../Stores/auth";
import api from "./api";
//user

export async function getUsers() {
  const { data } = await api.get("/user");
  return data;
}

export async function deleteUser(_id) {
  const { data } = await api.delete(`/user/${_id}`);

  return data;
}
export const login = async (credentials) => {
  const { setAuth, setUser } = useAuthStore.getState();
  const { data } = await api.post("/user", credentials);
  setAuth(data.token);
  setUser(data.user);
  return data;
};

export async function updateUser({ _id, newUserData }) {
  const { data } = await api.put(`/user/${_id}`, newUserData);

  return data;
}

//CategoryTree endpoints
export const getCategoryTrees = async (filters = {}) => {
  const { data } = await api.get("/categoryTrees", { params: filters });
  return data;
};

export const getCategoryTreesByName = async (name) => {
  const { data } = await api.get("/categoryTrees/search-by-name", {
    params: { name },
  });
  return data;
};

//trees
export async function getTrees() {
  const { data } = await api.get("/trees");

  return data;
}

export async function deleteTrees(_id) {
  const { data } = await api.delete(`/trees/${_id}`);
  return data;
}

export async function updateTrees({ _id, newData }) {
  const { data } = await api.put(`/trees/${_id}`, newData);

  return data;
}

export async function postTrees(newTrees) {
  const { data } = await api.post(`/trees`, newTrees);

  return data;
}
