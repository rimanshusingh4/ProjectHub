import React, { useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { useAuth } from '@/store/store';
import Modal from '@/components/Modal';
import Cards from '@/components/adminCard';
import axios from 'axios';
import { toast } from 'react-toastify';

function Projects() {
  const profileData = useOutletContext();
  const userData = profileData?.profileData?.[0] || {};
  const adminId = userData?._id || null;
  const Navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (isAdmin === false) {
      toast.error('Only for Admin', { autoClose: 800 });
      Navigate('/');
    }
  }, [isAdmin]);

  useEffect(() => {
    if (!adminId) {
      console.error('adminId is not available, skipping API call.');
      return;
    }

    const fetchProjects = async () => {
      try {
        const response = await axios.get(`http://localhost:4004/api/project/${adminId}`);
        // console.log('API Response:', response.data);

        setProjects(response.data.docs); // Set only the `data` array
      } catch (error) {
        console.error('Error fetching projects:', error);
        toast.error('Failed to fetch projects. Please try again later.');
      }
    };

    fetchProjects();
  }, [adminId]);

  // console.log('Projects state:', projects);

  return (
    <div className="w-full h-full bg-orange-400 rounded-xl flex flex-col items-center">
      <div className="h-auto w-auto flex justify-center items-center">
        <h1 className="text-3xl p-4 font-bold">Projects</h1>
      </div>
      <hr className="w-full border-gray-300 mb-4" />
      <div className="w-36 bg-white text-center">
         <button className='text-xl p-3 font-abel font-bold hover:text-amber-500 duration-200 hover:scale-105' 
          onClick={() => setShowModal(true)}>
          + Add Project
        </button>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center p-4">
        {projects.length > 0 ? (
          projects.map((project) => <Cards key={project._id} project={project} />)
        ) : (
          <p className="text-lg font-semibold text-white">Loading projects or no projects available.</p>
        )}
      </div>
                  {showModal && <Modal closeModal={setShowModal} />}

    </div>
  );
}

export default Projects;
