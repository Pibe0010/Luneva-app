import axios from "axios";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const fetchRegisterUser = async (name, lastName, email, pass) => {
  if (!name || name.trim() === "") return [];
  if (!lastName || lastName.trim() === "") return [];
  if (!email || email.trim() === "") return [];
  if (!pass || pass.trim() === "") return [];

  const response = await axios.post(`${apiUrl}/user/register`, {
    user_name: name,
    last_name: lastName,
    email: email,
    password: pass,
  });
  return response.data;
};
