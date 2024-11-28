import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Cards from '../components/Cards';

function AllProjects() {
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

  return (
    <div className='w-full h-full my-28'>
        <div className='cards flex flex-wrap w-full justify-around h-auto'>
                    {loading ? (
                        <p>Loading projects...</p>
                    ) : (
                        projects.map((project, index) => (
                            <Cards key={project._id || index} project={project} />
                        ))
                    )}
                </div>

                {/* Pagination Controls */}
                <div className="pagination flex justify-center items-center mt-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={!hasPrevPage}
                        className="px-4 py-2 border bg-gray-200 disabled:opacity-50"
                        >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 border ${
                            currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
                        }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={!hasNextPage}
                        className="px-4 py-2 border bg-gray-200 disabled:opacity-50"
                        >
                        Next
                    </button>
                </div>
        </div>
  )
}

export default AllProjects