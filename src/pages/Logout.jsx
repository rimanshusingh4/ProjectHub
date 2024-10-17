import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/store/store';
import axios from 'axios';

function Logout() {
    const navigate = useNavigate();
    const { logoutUser } = useAuth();

    useEffect(() => {
        async function logout() {
            try {
                const response = await axios.post('http://localhost:4004/api/logout', {}, {
                    withCredentials: true // Important: allows cookies to be sent/received
                });
                
                console.log(response.data);
            } catch (error) {
                console.log("Error during logout:", error);
            }

            logoutUser(); // Clear local state
            navigate("/login"); // Redirect after logout
        }

        logout();
    }, [logoutUser, navigate]); // Add dependencies to the effect

    return (
        <h1>Logging out...</h1>
    ); // Provide some user feedback
}

export default Logout;
