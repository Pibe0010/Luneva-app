import axios from "axios";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const fetchLogout = async () => {
  const response = await axios.post(
    `${apiUrl}/user/logout`,
    {},
    { withCredentials: true }
  );

  return response.data;
};
