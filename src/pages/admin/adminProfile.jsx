import React from 'react';
import { useOutletContext } from 'react-router-dom';

function AdminProfile() {
  const data = useOutletContext();
  const adminData = data?.profileData?.[0] || {};
  // console.log(adminData)
  const isoDate = adminData.updatedAt;


  const timeAgo = (isoDate) => {
    const currentTime = new Date();
    const lastLogin = new Date(isoDate);
    
    const timeDiff = currentTime - lastLogin; // Time difference in milliseconds
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    // Check if the difference is more than a day
    if (days >= 1) {
      return `${days} day${days > 1 ? 's' : ''} ago`;  // "2 days ago" or "1 day ago"
    } else if (hours >= 1) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;  // "10 hours ago" or "1 hour ago"
    } else if (minutes >= 1) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;  // "10 minutes ago"
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;  // "10 seconds ago"
    }
  }
  // console.log(timeAgo)


  return (
    <div className="flex flex-col items-center p-6 border rounded-xl bg-gray-100 min-h-auto max-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Profile</h1>
      <div className="bg-white border shadow-lg rounded-lg p-6 w-80">
        <div className="flex flex-col items-center">
          <img
            src={adminData.avatar || 'https://via.placeholder.com/150'}
            alt="Admin Avatar"
            className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            {adminData.fullname || 'Admin Name'}
          </h2>
          <p className='text-gray-500 text-xs'>Unique Id:- {adminData._id}</p>
          <p className="text-gray-500">{adminData.role || 'Administrator'}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            <strong>Email:</strong> {adminData.email || 'admin@example.com'}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Phone:</strong> {adminData.phone || 'N/A'}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Last Login: {timeAgo(isoDate)} </strong> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
