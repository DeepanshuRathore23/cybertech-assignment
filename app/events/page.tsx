'use client';
import EventCard from "../ui/EventCard";
import { useState, useEffect } from "react";
import Link from "next/link";

type Event = {
  title: string;
  description: string;
  images: string[];
  date: string;
};


export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function getEvents(){
      const res = await fetch('/api/event/fetch');
      const data = await res.json();
      setEvents(data);
    }

    getEvents();
  }, []);

  if(events.length) {
    return (
      <div className="min-h-screen mt-[90vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
  
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#d59f0f] mb-4">School Events</h1>
            <p className="text-lg text-gray-600">Stay updated with our latest events and activities</p>
          </div>
  
          <div className="flex justify-end mb-6">
            <Link href='/updateEvents'>
              <button className="p-3 bg-[#d59f0f] rounded-xl text-white">Manage Events</button>
            </Link>
            
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="min-h-screen mt-[90vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          No events available
        </div>
      </>
    );
  }

  
}
