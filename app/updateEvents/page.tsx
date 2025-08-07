'use client'

import { useState, useEffect, useRef } from "react";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function getEvents(){
      const res = await fetch('/api/event/fetch');
      const data = await res.json();
      setEvents(data);
    }

    getEvents();
  }, []);


  const [images, setImages] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImages(prev => [...prev, e.target.files![0]]);
    }
  };

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);

    images.forEach((img)=> {
      formData.append('images', img);
    });

    const res = await fetch('/api/event/add', {
      method: 'POST',
      body: formData,
    });

    if(res.ok) {
      setImages([]);
      setTitle('');
      setDescription('');
      setDate('');

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Refresh events list after adding
      const updatedRes = await fetch('/api/event/fetch');
      const updatedData = await updatedRes.json();
      setEvents(updatedData);
    } else {
      console.error("Failed to add event at upadateEvent at line 93");
    }
  }

  
  return (
    <div className="mt-[30vh] p-6">
      <h2 className="text-2xl font-bold mb-4">Add Event</h2>

      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 w-full"
        required
      />

      {/* Add one image at a time */}
      <input
        type="file"
        accept="image/*"
        onChange={handleAddImage}
        ref={fileInputRef}
        className="border p-2 w-full"
      />
      <div className="flex flex-wrap gap-2">
        {images.map((img, idx) => (
          <div key={idx} className="text-sm text-gray-600">{img.name}</div>
        ))}
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Event
      </button>
    </form>


      {/* Delete Events */}
      <ul className="space-y-4">
        {events.map((event: any) => (
          <li key={event.id} className="border p-4 flex justify-between">
            <div>
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
            <div>
              <form action={`/delete-event/${event.id}`} method="POST">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-3 py-1 rounded-xl"
                >
                  Delete
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}
