import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userDate, setUserData] = useState(null);

    useEffect(() => {
        setLocalStorage()
        const { employees } = getLocalStorage()
        setUserData(employees )
    }, [])

    return (
        <div>
            <AuthContext.Provider value={[userDate, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;