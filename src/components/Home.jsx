import React, { useEffect, useState } from 'react';
import WhyUs from '../pages/whyUs';
import Cards from './Cards';
import axios from 'axios';
import Footer from './Footer';
import imgCard1 from '../../public/card1.svg';
import imgCard2 from '../../public/card2.avif';
import imgCard3 from '../../public/card3.avif';
import star from '../../public/star.svg';
import Card_Static from './Card_Static';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

function Home() {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchProjects = async (page) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:4004/api/project`, {
                params: {
                    page,
                    limit: 10, // Set your desired page size
                },
            });

            const data = Object.values(response.data); // Update if structure differs
            console.log("API Response Data:", data);

            setProjects(data); // Update projects for current page
            setCurrentPage(data[0].page); // Current page
            setTotalPages(data[0].totalPages); // Total number of pages
            setHasNextPage(data[0].hasNextPage); // Is there a next page?
            setHasPrevPage(data[0].hasPrevPage); // Is there a previous page?
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch data whenever the current page changes
    useEffect(() => {
        fetchProjects(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        if (hasNextPage) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (hasPrevPage) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    useGSAP(() => {
        gsap.from(".left .card", {
            x: -100,
            duration: 0.5,
            opacity: 0,
            stagger: 0.3,
            scale: 0.1,
        });
        gsap.from(".right .card", {
            x: 100,
            duration: 0.5,
            opacity: 0,
            stagger: 0.8,
            scale: 0.1,
        });
    }, []);

    return (
        <>
            <div className='no-select w-full mt-24'>
                <div className='w-screen h-screen flex justify-between items-center'>
                    <div className='left w-80 h-screen flex flex-col items-center'>
                        <div className='card transform rotate-12 mt-5'>
                            <Card_Static
                                imgSrc={imgCard1}
                                title="Sara is building a new Project for Artist"
                                description="Support's"
                                altText="card1"
                            />
                        </div>
                        <div className='card ml-6 transform rotate-[350deg]'>
                            <Card_Static
                                imgSrc={imgCard2}
                                title="Sara is building a new Project for Artist"
                                description="Support's"
                                altText="card1"
                            />
                        </div>
                        <div className='card mt-6'>
                            <Card_Static
                                imgSrc={imgCard3}
                                title="Sara is building a new Project for Artist"
                                description="Support's"
                                altText="card1"
                            />
                        </div>
                    </div>
                    <div className='gap-12 content w-3/6 h-auto my-12 flex flex-col justify-center'>
                        <div>
                            <h1 className='flex justify-center items-center gap-2'>
                                <img className='w-5 h-5 object-cover' src={star} alt="star" />
                                <img className='w-5 h-5' src={star} alt="star" />
                                <img className='w-5 h-5' src={star} alt="star" />
                                <img className='w-5 h-5' src={star} alt="star" />
                                <img className='w-5 h-5' src={star} alt="star" />
                                <span className='text-lg font-normal'>Loved by 1,000+ Creators</span>
                            </h1>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-[90px] text-center font-pac'>Fund someone's creative works</h1>
                            <p className='text-2xl font-light text-center font-abel'>
                                Accept support. Buy Project. Setup a shop and Enviroment. It’s easier than you think.
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center font-abel-regular font-bold gap-2'>
                            <Link to="/admin">
                                <p className='text-2xl font-medium text-center py-6 px-12 rounded-full bg-[#FEDE00] hover:scale-105 duration-200 hover:shadow-lg'>
                                    Start Support's
                                </p>
                            </Link>
                            <p className='text-lg font-light text-center'>It’s free and takes less than a minute!</p>
                        </div>
                    </div>
                    <div className='right w-80 h-screen flex flex-col items-center'>
                        <div  className='card transform rotate-[-12deg] mt-5 mr-28'>
                            <Card_Static imgSrc={imgCard1} title="Sara is building a new Project for Artist" description="Support's" altText="card1" />
                        </div>
                        <div  className='card transform rotate-[10deg] mt-[-15px] ml-32'>
                            <Card_Static imgSrc={imgCard2} title="Sara is building a new Project for Artist" description="Support's" altText="card1" />
                        </div>
                        <div  className='card mt-6 mr-44 rotate-6'>
                            <Card_Static imgSrc={imgCard3} title="Sara is building a new Project for Artist" description="Support's" altText="card1" />
                        </div>
                    </div>
                </div>
                <div className='cards flex flex-wrap w-full justify-around h-auto'>
                    {loading ? (
                        <p>Loading projects...</p>
                    ) : (
                        projects.map((project, index) => (
                            <Cards key={project._id || index} project={project} />
                        ))
                    )}
                </div>
                <div className='p-4 flex justify-center items-center text-xl font-abel'>
                    <Link to="/projects">
                        <button className='bg-amber-500 p-4 rounded-3xl'>Show's More</button>
                    </Link>
                </div>

                <div className='flex w-3/4 justify-start items-start'>
                    <WhyUs />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;
