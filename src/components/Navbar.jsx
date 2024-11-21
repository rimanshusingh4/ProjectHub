import React from 'react';
import Logo from '../../public/Logo_new.png';
import { NavLink } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { useAuth } from '@/store/store';

function Navbar() {
    const { isLoggedIn, isAdmin } = useAuth();
    // console.log("Role",isAdmin)
    // console.log("Hii", isLoggedIn);
    
    return (
        <div className="navbar w-full h-20 flex items-center justify-between fixed z-10 bg-white shadow-md">
            {/* Login Section (Left) */}
            <div className="flex items-center ml-2 py-2 px-10">
                <div className="flex space-x-4 gap-5">
                    <p className="hover:text-[#FEDE00] cursor-pointer font-medium transform transition-transform duration-200 hover:scale-110">
                        FAQ's
                    </p>
                    <p className="hover:text-[#FEDE00] cursor-pointer font-medium transform transition-transform duration-200 hover:scale-110">
                        Resources
                    </p>
                    <p className="hover:text-[#FEDE00] cursor-pointer font-medium transform transition-transform duration-200 hover:scale-110">
                        Best of US
                    </p>
                </div>
            </div>

            
            {/* Logo Section (Center) */}
            <div className="flex justify-center items-center ml-36">
                {isAdmin ? (
                    <NavLink to="/admin">
                        <img className="h-16" src={Logo} alt="Logo image" />
                    </NavLink>):(
                        <NavLink to="/">
                            <img className="h-16" src={Logo} alt="Logo image" />
                        </NavLink>
                    )
                }
            </div>
            
            {/* Search Section (Right) */}
            <div className="flex items-center">
                <input
                    className="border-2 rounded-xl px-6 py-2 w-52"
                    placeholder="Search Your Desired Project Here..."
                />
                <button className="ml-2 border-[#FEDE00] p-3 rounded-full hover:bg-[#FEDE00]">
                    <BsSearch />
                </button>
            
            {isLoggedIn ? (
                    <NavLink to="/logout">
                        <button className="ml-4 border-2 border-[#FEDE00] rounded-full px-4 py-2 hover:bg-[#FEDE00] hover:text-white transform transition-transform duration-200 hover:scale-110">Logout</button>
                    </NavLink>
                ) : (
                    <div className="flex space-x-4 ml-4">
                        <NavLink to="/login">
                            <button className=" px-4 py-2 border border-[#FEDE00] rounded-full hover:bg-[#FEDE00] hover:text-white duration-200 hover:scale-110">Login</button>
                        </NavLink>
                        <NavLink to="/register">
                            <button className="border-2 border-[#FEDE00] px-4 py-2 rounded-full bg-[#FEDE00] hover:text-white transition-transform duration-200 hover:scale-110">Sign Up</button>
                        </NavLink>
                         {/* <div>
                        <NavLink to="/admin">
                            <button className='border-2 border-[#FEDE00] p-1 px-6 rounded-full bg-[#FEDE00]'>Admin</button>
                        </NavLink>
                    </div> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
