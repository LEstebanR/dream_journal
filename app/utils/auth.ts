import { supabase } from "./supabase";
import { createCookieSessionStorage, redirect, Session } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

export async function getSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function commitSession(session: Session) {
  return storage.commitSession(session);
}

export async function destroySession(session: Session) {
  return storage.destroySession(session);
}

export async function loginUser(
  request: Request,
  email: string,
  password: string
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

  const session = await getSession(request);
  session.set("userId", user.id);
  session.set("userEmail", user.email);

  return {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
    user,
  };
}

export async function LogoutUser(request: Request) {
  console.log("LOGOUT");
  await supabase.auth.signOut();
  const session = await getSession(request);
  return {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  };
}

export async function requireUserId(request: Request) {
  const session = await getSession(request);
  const userId = session.get("userId");

  if (!userId) {
    throw redirect("/log-in");
  }

  return userId;
}
