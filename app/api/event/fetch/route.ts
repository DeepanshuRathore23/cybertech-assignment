import { fetchEvents } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const events = await fetchEvents();
        console.log("These are the fetched events: ", events);

        return  NextResponse.json(events);
    } catch(error) {
        console.error("Failed to fetch events:", error);
    }
}