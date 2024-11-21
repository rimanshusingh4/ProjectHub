import React from 'react';
import ProjectImg from '../assets/Project.jpg';

function Cards({ project }) {
    const data = project.docs; // Assuming project.docs is an array
    console.log(data)
    return (
        <>
            {data.map((data, key) => (
                <div key={key} className='w-3/12 h-auto flex flex-wrap flex-col border shadow-md rounded-3xl m-4 bg-white font-osw'>
                    <div className='flex-grow flex items-center justify-center'>
                        <div className='min-h-32 max-h-full m-4 shadow-2xl rounded-lg'>
                            <img className='h-full rounded-2xl' src={data.thumbnail } alt={project.title} />
                        </div>
                    </div>
                    <div className='flex items-start p-2'>
                        <h1 className='text-2xl text-amber-500 font-bold'>{data.title}</h1>
                    </div>
                    <div className='flex items-end p-2'>
                        <p className='text-sm font-medium font-abel'>{data.description}</p>
                    </div>
                    <div className='flex p-6 justify-end'>
                        <button className='flex justify-center items-center p-3 border bg-amber-500 border-amber-500 text-black hover:scale-110 duration-100 hover:bg-white rounded-3xl w-36 text-xl font-semibold'>Open</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Cards;
