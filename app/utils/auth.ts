import { supabase } from "./supabase";

export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  const { user } = data;
  if (error) {
    throw new Error(error.message);
  }

  return { user };
}
