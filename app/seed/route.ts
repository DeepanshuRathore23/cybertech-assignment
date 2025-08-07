import { events, owner } from '../lib/placeholder-data';
import postgres from 'postgres';
import bcrypt from 'bcrypt';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

await sql`DROP TABLE IF EXISTS events CASCADE`

const res = await sql`SELECT column_name FROM information_schema.columns WHERE table_name = 'events'
`;

console.log("Columns of events are = ", res);

async function seedEvents(sqlInstance: typeof sql) {
    await sqlInstance`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sqlInstance`CREATE TABLE IF NOT EXISTS events (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        images TEXT[],  
        date DATE
    )`;

    const insertedEvents = await Promise.all(
        events.map(async (event) => {
            // Convert 'dd-mm-yyyy' → 'yyyy-mm-dd'
            const [day, month, year] = event.date.split('-');
            const formattedDate = `${year}-${month}-${day}`;

            return sqlInstance`
                INSERT INTO events(title, description, images, date)
                VALUES(${event.title}, ${event.description}, ${sqlInstance.array(event.images)}, ${formattedDate})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
        
    );

    return insertedEvents;
}

async function seedOwner(sqlInstance: typeof sql) {
    await sqlInstance`CREATE TABLE IF NOT EXISTS site_owner (
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    )`;

    const hashedPassword = await bcrypt.hash(owner.password, 10);
    
    await sqlInstance`INSERT INTO site_owner(id, email, password)
        VALUES(${owner.id}, ${owner.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
    `
}

export async function GET() {
    try {
        await sql.begin(async (tx) => {
            await seedEvents(tx); // ✅ Pass transaction instance
            await seedOwner(tx);
        });

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        return Response.json({ error: String(error) });
    }
}
