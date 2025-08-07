import {Post} from './definitions'
import postgres from 'postgres'
import { auth } from '@/auth';
import {redirect} from 'next/navigation'

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

export async function fetchPosts(): Promise<Post[]>{
    try {
        const data = await sql.unsafe<Post[]>(`SELECT * FROM posts`);
        // console.log("These are the posts fetched at data.ts : ", data);
        return data;
    } catch (error) {
        console.error("Database error: ", error);
        return [];
    }
}

export async function createPost(formData: FormData) {
    const description = formData.get('description') as string;
    const session = await auth();
  
    if (!session?.user || !session.user.email) {
      redirect('/login');
    }
  
    try {
      // Get user info from database using session email
      const user = await sql`
        SELECT id, name, profileImage FROM users WHERE email = ${session.user.email}
      `;
  
      if (!user || user.length === 0) {
        throw new Error("User not found in database.");
      }
  
      const { id: user_id, name: profilename, profileimage } = user[0];
  
      await sql`
        INSERT INTO posts (user_id, profilename, profileimage, description)
        VALUES (${user_id}, ${profilename}, ${profileimage}, ${description})
      `;
  
    } catch (err) {
      console.error('Error adding post:', err);
      throw err;
    }
}

export async function fetchPostsByUser(): Promise<Post[]>{
    const session = await auth();
    if (!session?.user || !session.user.email) {
        redirect('/login');
    }

    try {
        const user = await sql`SELECT id FROM users WHERE email = ${session.user.email}`;
        const userId = user[0].id;
        
        const data = await sql<Post[]>`SELECT * FROM posts WHERE user_id = ${userId}`;
        // console.log("These are the posts fetched at data.ts : ", data);
        return data;
    } catch (error) {
        console.error("Database error: ", error);
        return [];
    }
}