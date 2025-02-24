import { supabase } from "./supabase";
import { createCookieSessionStorage, redirect } from "@remix-run/node";

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: [process.env.SESSION_SECRET ?? "secret"],
      secure: true,
    },
  });

export async function loginUser(
  email: string,
  password: string,
  request: Request
) {
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

  const session = await getSession(request.headers.get("Cookie"));
  session.set("user", user);
  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function signInUser(
  email: string,
  password: string,
  name: string,
  request: Request
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

  const session = await getSession(request.headers.get("Cookie"));
  session.set("user", user);
  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function logOut(request: Request) {
  await supabase.auth.signOut();
  const session = await getSession(request.headers.get("cookie"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}
