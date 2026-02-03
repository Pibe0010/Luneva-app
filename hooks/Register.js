import supabase from "../supabase/Supabase.js";

export const fetchRegisterUser = async (name, lastName, email, pass) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password: pass,
    options: {
      data: {
        user_name: name,
        last_name: lastName,
        active: true,
        avatar: "",
      },
    },
  });

  if (error) throw error;
  return data;
};
