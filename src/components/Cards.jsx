import React from 'react';
import ProjectImg from '../assets/Project.jpg';

function Cards({ project }) {
    const data = project.docs; // Assuming project.docs is an array
    return (
        <>
            {data.map((data, key) => (
                <div key={key} className='w-2/6 flex flex-col border-4 rounded-3xl m-4 shadow-3xl bg-slate-600'>
                    <div className='flex-grow flex items-center justify-center'>
                        <div className='min-h-32 max-h-full m-4 shadow-2xl rounded-lg'>
                            <img className='h-full rounded-2xl' src={data.thumbnail } alt={project.title} />
                        </div>
                    </div>
                    <div className='flex items-start p-2'>
                        <h1 className='text-2xl text-white font-bold'>{data.title}</h1>
                    </div>
                    <div className='flex items-end p-4'>
                        <p className='text-sm font-medium'>{data.description}</p>
                    </div>
                    <div className='flex p-12 justify-end'>
                        <button className='flex justify-center items-center p-3 bg-black rounded-3xl w-36 text-xl font-semibold text-white'>Open</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Cards;
