import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(null); // Start as null to indicate "loading"

    useEffect(() => {
        // Initialize the auth state
        const token = Cookies.get("authcookie");
        setIsLoggedIn(Boolean(token));

        const adminStatus = Cookies.get("isAdmin");
        setIsAdmin(adminStatus === "true"); // Ensure it's evaluated as a boolean
    }, []);

    const storeToken = () => {
        setIsLoggedIn(true);
    };

    const storeRole = () => {
        Cookies.set("isAdmin", "true", { expires: 1 / 24 }); // Set for 1 hour
        setIsAdmin(true);
    };

    const logoutUser = () => {
        Cookies.remove("authcookie");
        Cookies.remove("isAdmin");
        setIsLoggedIn(false);
        setIsAdmin(false);
    };

    return (
        <AuthContext.Provider value={{ storeToken, storeRole, isAdmin, logoutUser, isLoggedIn }}>
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
