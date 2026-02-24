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

export const updateProfile = async ({ name, lastName, email, phone }) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("No authenticated user");

  const payload = {};

  if (name) payload.user_name = name;
  if (lastName) payload.last_name = lastName;
  if (email) payload.email = email;
  if (phone) payload.phone = phone;

  if (Object.keys(payload).length === 0) {
    throw new Error("No fields to update");
  }

  const { data, error } = await supabase
    .from("users")
    .update(payload)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) throw error;

  return data;
};
