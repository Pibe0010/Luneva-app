import api from "../utils/axios.js";

export const fetchCartList = async () => {
  const response = await api.get(`/trolley/products/list`);
  return response.data;
};

export const fetchCartDelete = async () => {
  const response = await api.get(`/delete/trolley`);
  return response.data;
};

export const fetchCartAdd = async (id, amount) => {
  const response = await api.post(`/trolley`, {
    ID_product: id,
    products_amount: amount,
  });
  return response.data;
};

export const fetchCartRemoveProduct = async (id) => {
  const response = await api.delete(`/trolley/delete`, { ID_product: id });
  return response.data;
};

export const fetchCartUpdateProduct = async (id, amount) => {
  const response = await api.put(`/trolley/update`, {
    ID_product: id,
    products_amount: amount,
  });
  return response.data;
};
