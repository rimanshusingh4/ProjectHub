import React from 'react';

function adminCard({ project }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-sm flex flex-col items-center">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-4 text-center">
        {project.description}
      </p>
      <a
        href={project.file?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors"
      >
        Download File
      </a>
    </div>
  );
}

export default adminCard;
