import supabase from "../supabase/Supabase.js";

export const fetchOffers = async () => {
  const { data, error } = await supabase.from("offers").select("*");

  if (error) throw error;
  return data;
};

export const fetchSearchOffers = async (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === "") return [];

  const { data, error } = await supabase
    .from("offers")
    .select("*")
    .ilike("name", `%${searchTerm}%`);

  if (error) throw error;
  return data;
};
