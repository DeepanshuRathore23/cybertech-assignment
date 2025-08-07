'use client';

import { useState } from 'react';

export default function ImageAdder() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);

    // Append new files and filter out duplicates by name
    const newImages = [...selectedImages, ...fileArray].filter(
      (file, index, self) =>
        index === self.findIndex(f => f.name === file.name && f.lastModified === file.lastModified)
    );
    setSelectedImages(newImages);

    const newPreviews = fileArray.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...newPreviews]);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Upload Images</label>
      <input
        type="file"
        accept="image/*"
        multiple
        name='images'
        onChange={handleImageChange}
        className="border p-2 w-full"
      />

      {previewUrls.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {previewUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`preview-${index}`}
              className="w-full h-32 object-cover rounded border"
            />
          ))}
        </div>
      )}
    </div>
  );
}
