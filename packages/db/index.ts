import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

import { PrismaClient } from "./generated/prisma";

export const prismaClient = new PrismaClient()

