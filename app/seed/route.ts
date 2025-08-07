import {users, posts} from '../lib/placeholder-data'
import postgres from 'postgres'
import bcrypt from 'bcrypt'

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

async function seedUsers(sqlInstance: typeof sql) {
    await sqlInstance`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sqlInstance`CREATE TABLE IF NOT EXISTS users(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        profileImage VARCHAR(255),
        bio VARCHAR(255)
    )`;

    

    const insertedUsers = await Promise.all(
        users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);

            return sqlInstance`INSERT INTO users (name, email, password, profileImage, bio)
            VALUES(${user.name}, ${user.email}, ${hashedPassword}, ${user.profileImage}, ${user.bio})
            ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedUsers;
}


async function seedPosts(sqlInstance: typeof sql) {
    await sqlInstance`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    // Create posts table with user_id as foreign key
    await sqlInstance`CREATE TABLE IF NOT EXISTS posts(
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      profilename VARCHAR(255) NOT NULL,
      profileimage VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL
    )`;
  
    // Insert posts and associate each with a user
    const insertedPosts = await Promise.all(
      posts.map(async (post, index) => {
        const user = users[index % users.length]; // associate post with a user in round-robin
        const [dbUser] = await sqlInstance`SELECT id FROM users WHERE email = ${user.email}`;
  
        return sqlInstance`INSERT INTO posts (user_id, profileName, profileImage, description)
          VALUES(${dbUser.id}, ${post.profileName}, ${post.profileImage}, ${post.description})
          ON CONFLICT (id) DO NOTHING`;
      })
    );
  
    return insertedPosts;
  }

  export async function GET() {
    try {
        await sql.begin(async (tx) => {
            await seedUsers(tx); // ✅ Pass transaction instance
            await seedPosts(tx);
        });

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        return Response.json({ error: String(error) });
    }
}
  