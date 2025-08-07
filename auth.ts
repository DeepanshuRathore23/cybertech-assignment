import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
// import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';

type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    profileImage: string,
    bio: string
}

const user = {
    id: '10',
    name: "Priya Reddy",
    email: "priya.reddy@example.com",
    password: "123456",
    profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Frontend developer with a flair for animation and design."
}
 
// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
//     return user[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
        //   const user = await getUser(email);
            if(email !== user.email || password !== user.password) {
                return null;
            } else {
                return user;
            }
        //   if (!user) return null;
        }
        
        console.log("Invalid Credentials");
        return null;
      },
    }),
  ],
});