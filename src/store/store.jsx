import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie"; // Optional for handling non-HTTP-only cookies

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the auth cookie exists
        const token = Cookies.get("authcookie");
        setIsLoggedIn(Boolean(token)); 
        // console.log("Token",token)
        // setIsLoggedIn(!!token);

    }, [isLoggedIn]);

    const storeToken = () => {
        // No need to explicitly set cookie; server sets it during login
        setIsLoggedIn(true);
    };

    const logoutUser = () => {
        Cookies.remove("authcookie"); // Remove the cookie
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ storeToken, logoutUser, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider.");
    }
    return authContextValue;
};
