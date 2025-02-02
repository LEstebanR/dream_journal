import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// Evita crear múltiples instancias en desarrollo (hot reload en Remix)
declare global {
  let __prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.__prisma) {
    global.__prisma = new PrismaClient();
  }
  prisma = global.__prisma;
}

export { prisma };
