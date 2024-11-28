import React from 'react';

function adminCard({ project }) {
  return (

    <div className='p-1 w-3/12 h-auto flex flex-wrap flex-col border shadow-md rounded-3xl m-4 bg-white font-osw'>
        <div className='p-1 h-56 w-full flex-grow overflow-hidden flex items-center justify-center'>
            <img className='object-cover rounded-2xl w-full h-full' src={project.thumbnail} alt={project.title} />
        </div>
        <div className='flex items-start p-2'>
            <h1 className='text-2xl text-amber-500 font-bold'>{project.title}</h1>
        </div>
        <div className='flex items-end p-2'>
            <p className='text-sm font-medium font-abel'>
                {project.description
                    ? project.description.split(' ').slice(0, 10).join(' ') + (project.description.split(' ').length > 10?'...' : '')
                    : 'No description available'}
            </p>
        </div>
        <div className='flex p-6 justify-end'>
        <a
          href={project.file?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors"
          >
          Download File
        </a>
        </div>
    </div>











    // <div className="p-3 w-3/12 h-auto flex flex-wrap flex-col border shadow-md rounded-3xl m-4 bg-white font-osw">
    //   <div className='p-2 h-56 w-full flex-grow flex-col overflow-hidden flex items-center justify-center'>

    //     <img
    //       src={project.thumbnail}
    //       alt={project.title}
    //       className="object-cover rounded-2xl w-full h-full"
    //       />
    //     <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
    //     <p className="text-gray-600 text-sm mb-4 text-center">
    //       {project.description}
    //     </p>
    //     <a
    //       href={project.file?.url}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors"
    //       >
    //       Download File
    //     </a>
    //   </div>
    // </div>
  );
}

export default adminCard;
