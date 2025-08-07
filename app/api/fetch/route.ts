import { fetchPosts } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const data = await fetchPosts();
        // console.log("These are the fetched Posts at api fetch folder: ", data);

        return  NextResponse.json(data);
    } catch(error) {
        console.error("Failed to fetch posts:", error);
    }
}