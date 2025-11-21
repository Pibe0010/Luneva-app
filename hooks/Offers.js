import axios from "axios";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const fetchOffers = async () => {
  const response = await axios.get(`${apiUrl}/offers/list`);
  return response.data;
};

export const fetchSearchOffers = async (searchTerm) => {
  const response = await axios.get(`${apiUrl}/offers/search`, {
    params: { searchTerm: searchTerm },
  });
  return response.data;
};
