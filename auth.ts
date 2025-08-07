import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import type { Owner } from "./app/lib/definitions";
import bcrypt from "bcrypt";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function getOwner(email: string): Promise<Owner | undefined> {
  try {
    const owner = await sql<Owner[]>`
      SELECT * FROM site_owner WHERE email = ${email}
    `;
    return owner[0];
  } catch (err) {
    console.error("Unable to fetch owner", err);
    throw new Error("Failed to fetch owner.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;
        const owner = await getOwner(email);
        if (!owner) return null;

        const passwordsMatch = await bcrypt.compare(password, owner.password);
        if (passwordsMatch) return owner;

        return null;
      },
    }),
  ],
});
