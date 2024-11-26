"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies = [], 
  githubLink, 
  liveLink 
}: ProjectCardProps) {
  return (
    <div className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-700 flex flex-col justify-between h-full">
      <div>
        <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-600 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex space-x-2 mt-4">
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}