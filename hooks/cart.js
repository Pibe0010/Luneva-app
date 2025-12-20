import axios from "axios";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const fetchCartList = async () => {
  const response = await axios.get(`${apiUrl}/trolley/products/list`);
  return response.data;
};

export const fetchCartDelete = async () => {
  const response = await axios.get(`${apiUrl}/delete/trolley`);
  return response.data;
};

export const fetchCartAdd = async () => {
  const response = await axios.post(`${apiUrl}/trolley`);
  return response.data;
};

export const fetchCartRemoveProduct = async (id) => {
  const response = await axios.delete(`${apiUrl}/trolley/delete`, { ID_product: id });
  return response.data;
};

export const fetchCartUpdateProduct = async () => {
  const response = await axios.put(`${apiUrl}/trolley/update`);
  return response.data;
};
