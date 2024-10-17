import React, { useEffect, useState } from 'react';
import WhyUs from '../pages/whyUs';
import Cards from './Cards';
import axios from 'axios';

function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:4004/');
                const data = Object.values(response.data); // Ensure this is the correct structure
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <div className='w-full h-auto flex flex-col items-center bg-slate-400'>
                <div className='content w-4/5 h-auto my-12 flex flex-col justify-center bg-gradient-to-r from-transparent from-10% via-teal-200 via-50% to-transparent to-90%'>
                    <h1 className='text-3xl font-extralight p-8 text-center'>Welcome to <span className='font-semibold text-cyan-700'>ProjectHub</span> - Your One-Stop Shop for College Projects!</h1>
                    <div className='flex flex-col text-center'>
                        <p className='p-4'><span className='font-medium'>Are you a CSE student looking for top-quality projects with complete source code?</span> You've come to the right place! At <span className='font-semibold text-cyan-700'>ProjectHub</span>.</p>
                        <p className='p-4'>we specialize in providing a wide range of well-documented, ready-to-use projects tailored to meet the needs of computer science students.<br/> Whether you need projects for assignments, final year submissions, or personal learning, we've got you covered.</p>
                        <p className='p-3'>
                            Our collection includes projects in various domains such as web development, machine learning, data science, software development, and more. <br/>
                            Each project comes with detailed documentation, source code, and clear instructions to help you understand and implement them with ease.
                        </p>
                    </div>
                </div>
                <hr/>
                <div className='cards flex flex-wrap w-full justify-around h-auto'>
                    {projects.map((project, index) => (
                        <Cards key={project.id || index} project={project} />
                    ))}                
                </div>

                <div className='flex w-3/4 justify-start items-start'>
                    <WhyUs />
                </div>            
            </div>
        </>
    );
}

export default Home;
