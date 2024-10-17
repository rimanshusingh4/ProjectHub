import { createContext, useContext, useState } from "react"
export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("authcookie"))
    // console.log("Token from store:", token)
    const storeToken = (serverToken)=>{
        return localStorage.setItem('authcookie', serverToken)
    }
    let isLoggedIn = token;

    const logoutUser = ()=>{
        setToken("")
        return localStorage.removeItem("authcookie");
    };
    return <AuthContext.Provider value={{storeToken, logoutUser, isLoggedIn}}>
        {children}
    </AuthContext.Provider>
}
    

export const useAuth = ()=>{
    const authContextValue =  useContext(AuthContext);
    if(!authContextValue){
        throw new error("useAuth used outside of Provider.")
    }
    return authContextValue
}