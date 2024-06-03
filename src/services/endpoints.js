import useAuthStore from "../Stores/auth";
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
export const getEvents = async (filters = {}) => {
  const { data } = await api.get(`/event`, { params: filters });
  return data;
};
export const deleteEvents = async (_id) => {
  const { data } = await api.delete(`/event/${_id}`);
  return data;
};

export const createEvents = async (newEvent) => {
  const { data } = await api.post(`/event`, newEvent);
  return data;
};

export async function updateEvents({ _id, body }) {
  const { data } = await api.put(`/event/${_id}`, body);

  return data;
}

export const getEventsByCategoryId = async ({ id, name, type }) => {
  const { data } = await api.get("/event/search-by-category", {
    params: { id, name, type },
  });

  return data;
};
//CategoryType endpoints
export const getCategoryType = async (filters = {}) => {
  const { data } = await api.get("/categoryType", { params: filters });
  return data;
};

export const getCategoryTypeByName = async (name) => {
  const { data } = await api.get("/categoryType/search-by-name", {
    params: { name },
  });
  return data;
};

//CategoryType endpoints
export const getCategoryPrice = async (filters = {}) => {
  const { data } = await api.get("/categoryPrice", { params: filters });
  return data;
};

//memorial

export async function getMemorial() {
  const { data } = await api.get("/memorial");

  return data;
}

export async function deleteMemorial(_id) {
  const { data } = await api.delete(`/memorial/${_id}`);
  return data;
}

export async function updateMemorial({ _id, newData }) {
  const { data } = await api.put(`/memorial/${_id}`, newData);

  return data;
}

export async function postMemorial(newMemorial) {
  const { data } = await api.post(`/memorial`, newMemorial);

  return data;
}
