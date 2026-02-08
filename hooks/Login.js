import supabase from "../supabase/Supabase.js";

export const fetchLogin = async (email, pass) => {
  if (!email || email.trim() === "") {
    throw new Error("Email or Password required");
  }
  if (!pass || pass.trim() === "") {
    throw new Error("Email or Password required");
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: pass,
  });

  if (error) throw error;

  return data;
};
