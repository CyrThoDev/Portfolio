import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProjects() {
  const allProjects = await prisma.projets.findMany();
  if (!allProjects) {
    throw new Error("Failed to fetch data");
  }
  return allProjects;
}
