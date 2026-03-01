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

export const updateAddress = async ({
  address,
  streetNumber,
  floor,
  ladder,
  door,
  city,
  country,
  postalCode,
}) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("No authenticated user");

  const payload = {};

  if (address) payload.address = address;
  if (streetNumber) payload.street_number = streetNumber;
  if (floor) payload.floor = floor;
  if (ladder) payload.ladder = ladder;
  if (door) payload.door = door;
  if (city) payload.city = city;
  if (country) payload.country = country;
  if (postalCode) payload.postal_code = postalCode;

  if (Object.keys(payload).length === 0) {
    throw new Error("No fields to update");
  }

  const { data, error } = await supabase
    .from("addresses")
    .update(payload)
    .eq("id_user", user.id)
    .select()
    .single();

  if (error) throw error;

  return data;
};
