import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

const prisma = new PrismaClient();
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Necesita la clave service_role
);

async function main() {
  console.log("🌱 Ejecutando seed...");

  const email = "test@example.com";
  const password = "Test1234"; // Contraseña para el usuario de prueba
  const name = "User Test"; // Nombre para el usuario de prueba

  // Verificar si el usuario ya existe en Supabase Auth
  const { data: existingUser } = await supabase
    .from("auth.users")
    .select("id")
    .eq("email", email)
    .single();

  let userId: string;

  if (!existingUser) {
    // Crear usuario en Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
    });

    if (error) {
      console.error(
        "❌ Error creando usuario en Supabase Auth:",
        error.message
      );
      return;
    }

    if (!data.user?.id) {
      console.error("❌ Error: User ID is undefined.");
      return;
    }
    userId = data.user.id;
    console.log(`✅ Usuario de prueba creado en Supabase: ${email}`);
  } else {
    userId = existingUser.id;
    console.log(`⚠️ Usuario ya existe en Supabase: ${email}`);
  }

  // Crear usuario en Prisma
  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      id: userId,
      email,
      name,
    },
  });
}

main()
  .catch((e) => {
    console.error("❌ Error ejecutando el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
