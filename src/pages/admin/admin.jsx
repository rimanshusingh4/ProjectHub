import React, { useState, useEffect } from 'react';
import { useAuth } from '@/store/store';
import { Link, Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from '@/components/Modal';
import axios from 'axios';

function Admin() {
  const Navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    if (isAdmin === false) {
      toast.error("Only for Admin", { autoClose: 800 });
      Navigate('/');
    }
  }, [isAdmin, Navigate]);
  // if(isAdmin === true){
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await axios.get("http://localhost:4004/api/current-user");
          const data = Object.values(response.data); // Adjust if necessary for your data structure
          if(data){
            setProfileData(data);
          }
          console.log("API Response Data:", data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
    
      fetchUser();
    }, []); // Empty dependency array ensures this runs only once
  // }
  
  return (
    <div className="flex w-full min-h-screen h-auto bg-[#f3cf7a] justify-center items-start">
      <div className="w-5/6 h-5/6 rounded-3xl my-24 flex gap-3">
        <div className="w-1/6 max-h-64 border shadow-lg rounded-3xl overflow-hidden bg-[#fffeb8] flex flex-col justify-start items-center gap-5 text-lg">
          <Link to="/admin/dashboard">
            <h1 className="mt-4 hover:text-xl">Dashboard</h1>
          </Link>
          <Link to="/admin/profile">
            <h1 className="mt-4 hover:text-xl">Profile</h1>
          </Link>
          <Link to="/admin/project">
            <h1 className="mt-4 hover:text-xl">Projects</h1>
          </Link>
        </div>
        <div className="right_comp w-full h-auto p-2 border shadow-lg rounded-3xl bg-[#f4fa9c]">
          <Outlet context={{ profileData }}/>
        </div>
        {showModal && <Modal closeModal={setShowModal} />}
      </div>
    </div>
  );
}

export default Admin;
