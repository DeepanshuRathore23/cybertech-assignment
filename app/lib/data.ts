import postgres from 'postgres'
import {Event} from './definitions'
import cloudinary from '../lib/cloudinary'

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

export async function fetchEvents(): Promise<Event[]> {
    try{
        const data = await sql<Event[]>`SELECT id, title, description, images, date FROM events`;
        // console.log("Data is of type ", Array.isArray(data));  // array hai verify krlia hai
        // console.log(data);
        return data;
    } catch(err) {
        console.error("Database error: ", err);
        return [];
    }
}

export async function addEvent(formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const dateString = formData.get('date') as string;
    const images = formData.getAll('images') as File[];

    const imageUrls = [];    

    const date = new Date(dateString);

    for (const file of images) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
  
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ resource_type: 'image' }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });
  
      imageUrls.push((result as any).secure_url);
    }

    // console.log("size of imageUrls = ", imageUrls.length)

    // imageUrls.forEach((img)=> {
    //   console.log(img);
    // })

    // console.log(typeof(imageUrls[0]));

  try{
    await sql`INSERT INTO events(title, description, images, date)
      VALUES(${title}, ${description}, ${imageUrls} ,${date})
      ON CONFLICT (id) DO NOTHING`;

  } catch(err) {
    console.error('Errr adding event', err);
    throw err;
  }
}