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
    <div className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-700 flex flex-col">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`${title} project preview`}
          width={300}
          height={200}
          className="mb-4 rounded-md object-cover"
        />
      )}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm flex-grow">{description}</p>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        aria-label={`View ${title} project details`}
      >
        View Project
      </button>
    </div>
  );
}