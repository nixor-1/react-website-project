import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config'; // Make sure env vars are loaded

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

export const prisma = new PrismaClient({ adapter });
