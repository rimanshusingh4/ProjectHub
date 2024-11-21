import React from 'react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-screen h-auto bg-amber-500  py-6 flex justify-around items-center px-10">
      {/* Left Section */}
      <div className="text-sm">
        © Buy Me a Tea
      </div>

      {/* Center Links */}
      <div className="flex space-x-6 text-sm font-medium">
        <p className="cursor-pointer hover:underline">About</p>
        <p className="cursor-pointer hover:underline">Help Center</p>
        <Link to="/admin"><p className="cursor-pointer hover:underline">Admin</p>
        </Link>
        <p className="cursor-pointer hover:underline">Resources</p>
        <p className="cursor-pointer hover:underline">Privacy</p>
        <p className="cursor-pointer hover:underline">Terms</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 text-lg">
        <FaTwitter className="cursor-pointer hover:text-gray-500" />
        <FaYoutube className="cursor-pointer hover:text-gray-500" />
        <FaInstagram className="cursor-pointer hover:text-gray-500" />
      </div>
    </div>
  );
}

export default Footer;
