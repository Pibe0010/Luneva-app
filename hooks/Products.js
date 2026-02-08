import supabase from "../supabase/Supabase.js";

export const fetchProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw error;
  return data;
};

export const fetchSearchProduct = async (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === "") return [];

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${searchTerm}%`);

  if (error) throw error;
  return data;
};
