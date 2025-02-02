import { supabase } from "./supabase";
import { prisma } from "./prisma.server";

// Definir el tipo de usuario de Supabase
interface SupabaseUser {
  id: string;
  email: string;
}

// REGISTRO DE USUARIO
export async function registerUser(
  email: string,
  password: string
): Promise<SupabaseUser> {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error || !data.user) {
    throw new Error(error?.message || "No se pudo registrar el usuario.");
  }

  // Guardar en Prisma (opcional)
  await prisma.user.create({
    data: { id: data.user.id, email: data.user.email! },
  });

  return data.user;
}

// LOGIN DE USUARIO
export async function loginUser(
  email: string,
  password: string
): Promise<SupabaseUser> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    throw new Error(error?.message || "No se pudo iniciar sesión.");
  }

  return data;
}

// LOGOUT
export async function logoutUser(): Promise<void> {
  await supabase.auth.signOut();
}
