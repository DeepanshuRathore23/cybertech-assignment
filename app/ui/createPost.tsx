'use client';

import Image from "next/image";
import { useState } from "react";

export default function CreatePost() {
  const [description, setDescription] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);

    const res = await fetch('/api/createPost', {
      method: 'POST',
      body: formData
    });

    if(res.ok) {
      setDescription('');
      console.log("Post submitted:", description);
    } else {
      console.error("Failed to add event at upadateEvent at line 93");
    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-300 rounded-lg p-4 w-full max-w-2xl shadow-sm hover:shadow-md transition duration-300 ease-in-out mx-auto mt-6"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0">
          <Image
            src="/user.png"
            alt="User"
            height={40}
            width={40}
            className="rounded-full object-cover"
          />
        </div>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Start a post..."
          className="w-full border border-gray-200 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          rows={3}
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition duration-200 text-sm"
        >
          Post
        </button>
      </div>
    </form>
  );
}
