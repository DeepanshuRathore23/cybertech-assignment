'use client';

import Image from "next/image";
import { Heart, MessageCircle, Bookmark } from 'lucide-react';
import { useState } from "react";

type postProps = {
  user_id: string,
  profilename: string,
  profileimage: string,
  description: string
};

export default function Post({profileimage, profilename, description }: postProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  // console.log(profileimage);

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 w-full max-w-2xl shadow-sm hover:shadow-md transition duration-300 ease-in-out mx-auto mt-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <Image
          src={profileimage}
          height={40}
          width={40}
          alt="profile icon"
          className="rounded-full object-cover"
        />
        <div className="font-semibold text-gray-800">{profilename}</div>
      </div>

      {/* Description */}
      <div className="mt-3 text-sm text-gray-700 whitespace-pre-line">
        {description}
      </div>

      {/* Action Section */}
      <div className="flex justify-around mt-5 border-t pt-3 text-sm text-gray-600">
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center gap-1 hover:text-blue-600 transition"
        >
          <Heart size={18} className={liked ? "fill-red-500 stroke-red-500" : ""} />
          Like
        </button>

        <button className="flex items-center gap-1 hover:text-blue-600 transition">
          <MessageCircle size={18} />
          Comment
        </button>

        <button
          onClick={() => setSaved(!saved)}
          className="flex items-center gap-1 hover:text-blue-600 transition"
        >
          <Bookmark size={18} className={saved ? "fill-blue-500 stroke-blue-500" : ""} />
          Save
        </button>
      </div>
    </div>
  );
}
