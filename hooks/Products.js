import axios from "axios";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const fetchProducts = async () => {
  const response = await axios.get(`${apiUrl}/product/list`);
  return response.data;
};

export const fetchSearchProduct = async (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === "") return [];

  const response = await axios.get(`${apiUrl}/product/search`, {
    params: { searchTerm: searchTerm },
  });
  const result = await response.data;
  return result.data || [];
};
