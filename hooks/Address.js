import supabase from "../supabase/Supabase.js";

export const fetchAddress = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("addresses")
    .select("*")
    .eq("id_user", user.id)
    .single();

  if (error) throw error;

  return data;
};

export const updateAddress = async (payload) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("No authenticated user");

  const { data, error } = await supabase
    .from("addresses")
    .update(payload)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) throw error;
  return data;
};
