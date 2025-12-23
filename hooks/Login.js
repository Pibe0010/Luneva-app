import api from "../utils/axios.js";

export const fetchLogin = async (email, pass) => {
  if (!email || email.trim() === "") {
    throw new Error("Email or Password required");
  }
  if (!pass || pass.trim() === "") {
    throw new Error("Email or Password required");
  }

  const response = await api.post(`/user/login`, {
    email: email,
    password: pass,
  });

  return response.data.data;
};
