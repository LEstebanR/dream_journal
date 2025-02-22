import { supabase } from "./supabase";
import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: ["tu_secreto_super_seguro"], // ¡Cambia esto!
      secure: process.env.NODE_ENV === "production",
    },
  });

export { getSession, commitSession, destroySession };
export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  const { user } = data;
  if (!user) {
    throw new Error("User not found");
  }
}

export async function signInUser(
  email: string,
  password: string,
  name: string
) {
  const { data: user, error: signInError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (signInError) {
    throw new Error(signInError.message);
  }

  return user;
}
