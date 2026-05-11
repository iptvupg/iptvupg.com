"use client";

import type { Metadata } from "next";
import { useState } from "react";

const slots = [
  { id: 1, name: "Oliver", file: "review-1.webp" },
  { id: 2, name: "Henry", file: "review-2.webp" },
  { id: 3, name: "Adeline", file: "review-3.webp" },
  { id: 4, name: "Harper", file: "review-4.webp" },
  { id: 5, name: "Nicole", file: "review-5.webp" },
];

export default function UploadReviews() {
  const [status, setStatus] = useState<Record<number, string>>({});

  async function handleFile(id: number, file: File) {
    setStatus((s) => ({ ...s, [id]: "Uploading..." }));
    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", String(id));
    const res = await fetch("/api/upload-review", { method: "POST", body: formData });
    if (res.ok) {
      setStatus((s) => ({ ...s, [id]: "Saved!" }));
    } else {
      setStatus((s) => ({ ...s, [id]: "Error" }));
    }
  }

  return (
    <div className="min-h-screen bg-[#0b1219] p-8 text-white">
      <h1 className="mb-2 text-3xl font-black">Upload Review Screenshots</h1>
      <p className="mb-8 text-gray-400">Drag & drop or click each slot to upload the WhatsApp screenshot.</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {slots.map((slot) => (
          <label
            key={slot.id}
            className="flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-gray-600 bg-gray-800/50 p-6 transition-all hover:border-cyan-400 hover:bg-gray-800"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file) handleFile(slot.id, file);
            }}
          >
            <div className="mb-3 text-4xl">📸</div>
            <div className="mb-1 text-sm font-bold">{slot.name}</div>
            <div className="mb-3 text-xs text-gray-500">{slot.file}</div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(slot.id, file);
              }}
            />
            <div className="text-xs text-cyan-400">
              {status[slot.id] || "Click or drop image"}
            </div>
            {status[slot.id] === "Saved!" && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={`/reviews/review-${slot.id}.webp?t=${Date.now()}`}
                alt={slot.name}
                className="mt-3 h-40 rounded-lg border border-gray-700 object-cover"
              />
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
