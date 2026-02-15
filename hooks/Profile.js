import supabase from "../supabase/Supabase.js";

export const fetchProfile = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("No authenticated user");

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (error) throw error;

  return data;
};

export const updateProfile = async (payload) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("No authenticated user");

  const { data, error } = await supabase
    .from("users")
    .update(payload)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) throw error;
  return data;
};
