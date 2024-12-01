"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl 
}: ProjectCardProps) {
  return (
    <div 
      className="p-6 rounded-lg shadow-md 
      bg-white dark:bg-gray-800 
      border border-gray-200 dark:border-gray-700 
      transition-transform duration-300 hover:scale-105"
    >
      {/* Image Section */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`${title} project preview`}
          width={300}
          height={200}
          className="mb-4 rounded-md object-cover 
          border-2 border-gray-200 dark:border-gray-600"
        />
      )}

      {/* Title */}
      <h4 className="text-xl font-semibold mb-4 
        text-gray-900 dark:text-white">
        {title}
      </h4>

      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-400 mb-6">
        {description}
      </p>

      {/* Button */}
      <button 
        className="px-6 py-3 rounded-md 
        bg-blue-600 text-white 
        hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
        transition-all focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
        aria-label={`View ${title} project details`}
      >
        View Project
      </button>
    </div>
  );
}
