import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
function Cards({ project }) {
    const data = project.docs; // Assuming project.docs is an array

    // const getProjectDetails = async () => {
    //     const response = await axios.get(`http://localhost:4004/api/project/${data._id}`);
    // };

    return (
        <>
            {data.map((data, key) => (
                <div key={key} className='p-1 w-3/12 h-auto flex flex-wrap flex-col border shadow-md rounded-3xl m-4 bg-white font-osw'>
                    <div className='p-1 h-56 w-full flex-grow overflow-hidden flex items-center justify-center'>
                        <img className='object-cover rounded-2xl w-full h-full' src={data.thumbnail} alt={data.title} />
                    </div>
                    <div className='flex items-start p-2'>
                        <h1 className='text-2xl text-amber-500 font-bold'>{data.title}</h1>
                    </div>
                    <div className='flex items-end p-2'>
                        <p className='text-sm font-medium font-abel'>
                            {data.description
                                ? data.description.split(' ').slice(0, 10).join(' ') + (data.description.split(' ').length > 10?'...' : '')
                                : 'No description available'}
                        </p>
                    </div>
                    <div className='flex p-6 justify-end'>
                        <Link to={`/projectDetails/${data._id}`}>
                            <button className='flex justify-center items-center p-3 border bg-amber-500 border-amber-500 text-black hover:scale-110 duration-100 hover:bg-white rounded-3xl w-36 text-xl font-semibold'
                            >
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Cards;
