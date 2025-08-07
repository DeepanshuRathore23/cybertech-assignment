import postgres from "postgres";
import { addEvent } from "@/app/lib/data";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});


export async function POST(req: Request) {
    const formData = await req.formData();
  
    try {
      await addEvent(formData);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
      console.error('❌ Internal Error at POST request of adding event:', err); // Add this
      return new Response(JSON.stringify({ error: 'Failed to add event', details: (err as any).message }), { status: 500 });
    }
}