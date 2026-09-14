import { createContext, useState } from "react"

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFail, setIsFail] = useState(false);
    const [user, setUser] = useState({
        username: "",
        userID: "",
        userRole: "",
        accessToken: null
    });

    return (
        <AuthContext.Provider
            value={{
                isLoading, setIsLoading,
                isFail, setIsFail,
                user, setUser
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
