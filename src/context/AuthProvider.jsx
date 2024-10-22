import React, { createContext, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userDate, setUserData] = useState(null);

    const data = getLocalStorage()
    console.log(data.admin);
    

    return(
        <div>
            <AuthContext.Provider value={"Ajeet"}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;