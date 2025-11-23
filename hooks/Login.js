import axios from "axios";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const fetchLogin = async (email, pass) => {
  if (!email || email.trim() === "") {
    throw new Error("Email or Password required");
  }
  if (!pass || pass.trim() === "") {
    throw new Error("Email or Password required");
  }

  const response = await axios.post(`${apiUrl}/user/login`, {
    email: email,
    password: pass,
  });

  return response.data.data;
};
