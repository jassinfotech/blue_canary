import {createContext, useEffect, useState} from "react";
import axios from "axios";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

        // Getter and setter for the current active user. To store user authentication as well.
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('user')) || null;
        } catch (error) {
            console.log('Error parsing user data from local storage:', error);
            return null;
        }
    });

        // Login the user.
    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8000/auths/login", inputs, {
            withCredentials: true,
        });
        setCurrentUser(res.data);
    };

        // Logout the current user.
    const logout = async () => {
        await axios.post("http://localhost:8000/auths/logout");
        setCurrentUser(null);
    };

        // Updates browsers local storage.
    useEffect(() => {
        // localStorage.setItem("user", JSON.stringify(currentUser));
        if (currentUser !== null) {
            localStorage.setItem("user", JSON.stringify(currentUser));
        } else {
            localStorage.removeItem("user");
        }
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};