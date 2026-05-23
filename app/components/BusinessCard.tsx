import React from 'react';

interface BusinessCardProps {
  name: string;
  logo?: string;
  tags: string[];
  status: "open" | "closed";
}

export default function BusinessCard({
  name,
  logo,
  tags,
  status,
}: BusinessCardProps) {
  return (
    <div className="border rounded p-4 flex flex-col items-center">
      {logo && (
        <img
          src={logo}
          alt={name}
          className="w-24 h-24 object-contain mb-2"
        />
      )}
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((t) => (
          <span
            key={t}
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
          >
            {t}
          </span>
        ))}
      </div>
      <span
        className={`px-2 py-1 rounded text-xs ${{
          open: "bg-green-100 text-green-800",
          closed: "bg-gray-300 text-gray-700",
        }[status]}`}
      >
        {status === "open" ? "Open" : "Closed"}
      </span>
    </div>
  );
}