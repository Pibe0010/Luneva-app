import api from "../utils/axios.js";

export const fetchLogout = async () => {
  const response = await api.post(`/user/logout`, {}, { withCredentials: true });

  return response.data;
};
